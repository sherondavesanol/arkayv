
import { StyledIcon, StyledLink, StyledText, Wrapper } from "./Footer.style"

export default function Footer() {

    return (
        <>
            <Wrapper className='mb-4'>
                <hr></hr>
                <StyledText className='col-12 text-center text-md-left'><strong>arkayv_</strong> is a non-commercial tribute website made for the sole purpose of creating a sample project. We do not sell actual products. All intellectual property belong to the respective artists. </StyledText>
                <div className='d-flex flex-column flex-md-row text-center text-md-left align-items-center'>
                    <StyledText className='my-0 col-md-2 text-md-left'>SHERONDAVESANOL &copy;2021</StyledText>
                    <StyledText className='my-0 col-md-2'>Full-Stack Web Developer</StyledText>
                    <StyledText className='my-0 col-md-2'>UI/UX Designer</StyledText>
                    <div className='my-4 my-md-0 col-md-2'>
                        <a href='https://www.behance.net/sherondavesanol' target='_blank' rel='noreferrer'><StyledIcon className='fab fa-behance-square'></StyledIcon></a>
                        <a href='https://github.com/sherondavesanol' target='_blank' rel='noreferrer'><StyledIcon className='fab fa-github-square'></StyledIcon></a>
                        <a href='https://www.linkedin.com/in/sheron-dave-sa%C3%B1ol-63a85220b/' target='_blank' rel='noreferrer'><StyledIcon className='fab fa-linkedin'></StyledIcon></a>
                    </div>
                    <StyledLink href='https://sherondavesanol.github.io/portfolio-website/' target='_blank' className='d-flex mx-auto'>View Portfolio</StyledLink>
                </div>
            </Wrapper>
        </>
    )
}