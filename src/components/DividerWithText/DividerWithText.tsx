import * as Types from "./DividerWithText.types";
import * as Styles from "./DividerWithText.styles";

const DividerWithText = ({ children }: Types.Props) => {
  return (
    <Styles.Container>
      <Styles.DividerContainer>
        <Styles.Divider side="left" />
      </Styles.DividerContainer>
      <Styles.Text>{children}</Styles.Text>
      <Styles.DividerContainer>
        <Styles.Divider side="right" />
      </Styles.DividerContainer>
    </Styles.Container>
  );
};

export default DividerWithText;
