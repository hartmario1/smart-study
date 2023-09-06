import { Box } from "@chakra-ui/react";

const QuestionsCard = ({ title, content }: { title: string; content: string; }) => {
  return (
    <Box
      maxW='sm'
      overflow='hidden'
      backgroundColor="white">
      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'>
          {title}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' color='gray.600' fontSize='sm'>
            {content}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default QuestionsCard;