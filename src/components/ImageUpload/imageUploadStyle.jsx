import styled from "styled-components";

const ImageView = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background-color: #000000;
`

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 200px;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
`

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0066f5f1;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
    ImageUploadContainer,
    ImageView,
    FileInput,
    FileLabel
}
