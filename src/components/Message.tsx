import { Alert, Box } from "@mui/material";

interface MessageProps {
    text: string;
    color: "error" | "warning" | "info" | "success";
}

const Message: React.FC<MessageProps> = ({text, color}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 2,
        marginTop: "4rem",
      }}
    >
      <Alert severity={color} variant="filled">
        {text}
      </Alert>
    </Box>
  );
};
export default Message;
