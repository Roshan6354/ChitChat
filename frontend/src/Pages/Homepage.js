import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#A1C2F1"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="8px "
        borderWidth="4px"
      >
        <Text fontSize="40px" fontFamily="Work sans" fontWeight={"bold"} >
          Lets-Talk
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="8px" borderWidth="4px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" >
            <Tab >Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
