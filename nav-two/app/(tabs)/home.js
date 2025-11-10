import {
    Box,
    Heading,
    Center,
    Spinner,
    Divider,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Categories, Header, NewsItem } from "../../components";

const Home = () => {
    const [isLoadingNews, setIsLoadingNews] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [news, setNews] = useState([]);
    const [activeCategoryNews, setActiveCategoryNews] = useState("indonesia");

    
    const getNews = (categoryName) => {
        setIsLoadingNews(true);

        const url = `https://jakpost.vercel.app/api/category/${categoryName}`;

        console.log("Fetching news from:", url);

        fetch(url)
            .then((response) => {
                console.log("News API status:", response.status);
                console.log("News API content-type:", response.headers.get("content-type"));
                return response.text();
            })
            .then((text) => {
                console.log("News API response (first 500 chars):", text.substring(0, 500));
                const json = JSON.parse(text);

                if (json.status === 200 && json.posts && json.posts.length > 0) {
                    const mappedNews = json.posts.map((article, index) => {
                        let originalLink = article.link;

                        if (article.link && article.link.includes('jakpost.vercel.app/api/detailpost')) {
                            
                            const pathMatch = article.link.match(/\/api\/detailpost\/(.+)/);
                            if (pathMatch && pathMatch[1]) {
                                
                                originalLink = `https://www.thejakartapost.com/${pathMatch[1]}`;
                            }
                        }

                        return {
                            key: article.link || index.toString(),
                            title: article.title,
                            link: originalLink, 
                            description: article.headline || "No description available",
                            pubDate: article.pusblised_at || article.published_at || new Date().toISOString(),
                            thumbnail: article.image,
                            source: article.category || "Jakarta Post"
                        };
                    });

                    console.log(`Mapped ${mappedNews.length} news items`);
                    setNews(mappedNews);
                } else {
                    console.log("No articles found");
                    setNews([]);
                }
            })
            .catch((error) => {
                console.error("News fetch error:", error);
                console.error("Error details:", error.message);
                setNews([]);
            })
            .finally(() => {
                setIsLoadingNews(false);
                setIsFetching(false);
            });
    };
    

    const categoriesHandler = (categoryName) => {
        setActiveCategoryNews(categoryName);
        getNews(categoryName);
    };

    useEffect(() => {
        getNews(activeCategoryNews);
    }, []);

    const onRefresh = () => {
        setIsFetching(true);
        getNews(activeCategoryNews);
    };

    const renderitem = ({ item }) => {
        return <NewsItem item={item} />;
    };

    return (
        <>
            <Header title={"News"} />
            <Box py={"$4"} bg={"$red700"}>
                <Heading ml={"$4"} lineHeight={"$lg"} mb={"$4"} color="$white">
                    Jakarta Post - Indonesia News
                </Heading>
                <Categories onChange={categoriesHandler} />
            </Box>
            <Divider />
            {isLoadingNews ? (
                <Center flex={1}>
                    <Spinner size={"large"} color={"$black"} />
                </Center>
            ) : (
                <FlatList
                    data={news}
                    renderItem={renderitem}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                    refreshing={isFetching}
                    onRefresh={onRefresh}
                />
            )}
        </>
    );
};

export default Home;


