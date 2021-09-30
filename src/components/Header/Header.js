import { Wrapper, HeaderText, HighlightedText, StyledImage } from "./Header.style";

export default function Header(props) {

    return(
        <Wrapper className="my-4">
            <HeaderText>{props.textStart} <HighlightedText>{props.highlightedText}</HighlightedText> {props.textEnd}</HeaderText>
            <StyledImage src={props.headerImage} alt='' />
        </Wrapper>
    )
}