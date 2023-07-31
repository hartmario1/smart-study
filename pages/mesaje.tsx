import { Box } from "@chakra-ui/react";
import ProfileLayout from "../components/Layouts/profile";
import ProfileSidebar from "../components/ProfileSidebar";

const Messages = () => {
  return (
    <ProfileLayout>
      <ProfileSidebar children={
        <Box>
          Mesaje
        </Box>
      } />
    </ProfileLayout>
  )
};

export default Messages;
