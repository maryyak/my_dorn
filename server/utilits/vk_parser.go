package utilits

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

const (
	apiURL      = "https://api.vk.com/method/wall.get"
	domain      = "student.dom12.mirea"
	count       = 16
	accessToken = "58cdea9f58cdea9f58cdea9f2f5bede03c558cd58cdea9f3fce02c1b73869da3599a99d"
	vers        = "5.199"
)

type Response struct {
	Response struct {
		Count int    `json:"count"`
		Items []Post `json:"items"`
	} `json:"response"`
}

type Post struct {
	ID          int          `json:"id"`
	Date        int64        `json:"date"`
	Text        string       `json:"text"`
	Attachments []Attachment `json:"attachments"`
}

type Attachment struct {
	Type      string `json:"type"`
	Photo     *Photo `json:"photo,omitempty"`
	Video     *Video `json:"video,omitempty"`
	OrigPhoto *Size  `json:"orig_photo,omitempty"`
}

type Photo struct {
	Sizes []Size `json:"sizes"`
}

type Video struct {
	Title  string  `json:"title"`
	URL    string  `json:"url"`
	Images []Image `json:"image"`
}

type Image struct {
	URL    string `json:"url"`
	Weight int    `json:"width"`
}

type Size struct {
	Type string `json:"type"`
	URL  string `json:"url"`
}

type OutputPost struct {
	URL  string `json:"url"`
	Text string `json:"text"`
	Date string `json:"date"`
	ID   string `json:"id"`
}

func saveJSONToFile(outputData interface{}, dir, filename string) error {
	if err := os.MkdirAll(dir, os.ModePerm); err != nil {
		return fmt.Errorf("failed to create directory: %w", err)
	}

	filePath := filepath.Join(dir, filename)

	outputFile, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("failed to create file: %w", err)
	}
	defer func(outputFile *os.File) {
		err := outputFile.Close()
		if err != nil {

		}
	}(outputFile)

	outputJSON, err := json.MarshalIndent(outputData, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal JSON: %w", err)
	}

	_, err = outputFile.Write(outputJSON)
	if err != nil {
		return fmt.Errorf("failed to write to file: %w", err)
	}

	return nil
}

func fetchPosts(url string) (*Response, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to make GET request: %w", err)
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {

		}
	}(res.Body)

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected HTTP status: %s", res.Status)
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %w", err)
	}

	var response Response
	if err := json.Unmarshal(body, &response); err != nil {
		return nil, fmt.Errorf("failed to parse JSON: %w", err)
	}
	return &response, nil
}

func unixToString(unixTime int64) string {
	t := time.Unix(unixTime, 0).UTC()
	return t.Format("2006-01-02 15:04:05")
}

func VkParsing() {
	//for {
	url := fmt.Sprintf("%s?owner_id=%s&access_token=%s&count=%d&v=%s", apiURL, domain, accessToken, count, vers)
	fmt.Println(url)
	response, err := fetchPosts(url)
	if err != nil {
		log.Println("Error fetching posts:", err)
		//time.Sleep(time.Minute)
		//continue
	}

	outputData := make([]OutputPost, 0)
	for _, post := range response.Response.Items {
		for _, attachment := range post.Attachments {
			switch attachment.Type {
			case "photo":
				if attachment.Photo != nil {
					for _, size := range attachment.Photo.Sizes {
						if size.Type == "orig" || size.Type == "z" {
							outputData = append(outputData, OutputPost{
								URL:  size.URL,
								Text: post.Text,
								Date: unixToString(post.Date),
								ID:   fmt.Sprintf("https://vk.com/life.mirea?w=wall-42869722_%d", post.ID),
							})
						}
					}
				}
			case "video":
				if attachment.Video != nil {
					var maxImageURL string
					maxWeight := 0
					for _, img := range attachment.Video.Images {
						if img.Weight > maxWeight {
							maxWeight = img.Weight
							maxImageURL = img.URL
						}
					}
					outputData = append(outputData, OutputPost{
						URL:  maxImageURL,
						Text: post.Text,
						Date: unixToString(post.Date),
						ID:   fmt.Sprintf("%d", post.ID),
					})
				}
			}
		}
	}

	err = saveJSONToFile(outputData, "public/data", "newsData.json")
	if err != nil {
		log.Println("Error saving JSON:", err)
	} else {
		log.Println("JSON successfully saved to public/data/newsData.json")
	}

	//	time.Sleep(3600 * time.Second)
	//}
}
