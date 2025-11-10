import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import { Box } from "@gluestack-ui/themed";

const Web = () => {
    const params = useLocalSearchParams();

    return (
        <>
            <Header title={"Read"} withBack={true} />
            <Box flex={1}>
                <WebView
                    source={{ uri: params.link }}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </Box>
        </>
    );
};

export default Web;
