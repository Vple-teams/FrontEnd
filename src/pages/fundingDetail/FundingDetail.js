import DetailHeader from '../../components/detailHeader/DetailHeader'
import {StyledImg, StyledContent, StyledDiv, StyledContentTitle, 
    StyledContentDescription, BigFont, AlignRight, GreenFont, 
    SmallFont, RateBar, AchievBar, WhiteButton, WhiteButtonPadding, GreenButton} from './FundingDetailStyle';
import {useNavigate} from "react-router-dom";

export default function FundingDetail() {

    const title = "펀딩 제목"
    let leftDays = 16;
    let achievPercent = 6662;
    let money = 213520;
    let supporter = 24;

    let navigate = useNavigate();

    return (
        <>
            <DetailHeader title={title}/>
            <StyledImg/>
            <StyledContent>
                <StyledDiv>
                    <StyledContentTitle>{title}</StyledContentTitle>
                    <StyledContentDescription>
                        제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
                        제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
                    </StyledContentDescription>
                </StyledDiv>
                <StyledDiv>
                    <BigFont>{leftDays}일 남음</BigFont>
                    <AlignRight>
                        <GreenFont>{achievPercent}%</GreenFont><SmallFont> 달성</SmallFont>
                    </AlignRight>
                    <RateBar><AchievBar count={achievPercent}/></RateBar>
                    <BigFont>{money} </BigFont><SmallFont>원 펀딩</SmallFont>
                    <br/><BigFont>{supporter} </BigFont><SmallFont>명의 서포터</SmallFont>
                </StyledDiv>
                <StyledDiv>
                    <WhiteButton>스크랩</WhiteButton>
                    <WhiteButtonPadding>문의</WhiteButtonPadding>
                    <WhiteButton>공유하기</WhiteButton>
                    <GreenButton>펀딩하기</GreenButton>
                </StyledDiv>
                <StyledDiv>
                    <StyledContentTitle>프로젝트 스토리</StyledContentTitle>
                    <StyledContentDescription>
                        제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
                        제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명 제품 설명
                    </StyledContentDescription>
                </StyledDiv>

            </StyledContent>

        </>
    );
}