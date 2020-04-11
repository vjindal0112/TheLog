import styled from "styled-components";

const Box = styled.section`
  height: 200px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05), 0px 1px 1px rgba(0, 0, 0, 0.05);
`;

const Post: React.FC = ({ children }) => {
  return (
    <Box>
      <h1> What did you do today? </h1>
    </Box>
  );
};

export { Post };
