import { Container, Typography, Wrapper } from '@supercarmarket/ui';
import Link from 'next/link';

import * as style from './footer.styled';

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" background="#F7F7F8">
      <Wrapper css={style.footer}>
        <Wrapper.Left css={style.footerLeft}>
          <Wrapper.Item css={style.footerLeftItem}>
            <Typography
              fontSize="body-14"
              fontWeight="regular"
              lineHeight="150%"
              color="greyScale-6"
            >
              사업자등록번호
            </Typography>
            <Typography
              fontSize="body-14"
              fontWeight="regular"
              lineHeight="150%"
              color="greyScale-6"
            >
              대표자
            </Typography>
            <Typography
              fontSize="body-14"
              fontWeight="regular"
              lineHeight="150%"
              color="greyScale-6"
            >
              전화번호
            </Typography>
            <Typography
              fontSize="body-14"
              fontWeight="regular"
              lineHeight="150%"
              color="greyScale-6"
            >
              이메일
            </Typography>
            <Typography
              fontSize="body-14"
              fontWeight="regular"
              lineHeight="150%"
              color="greyScale-6"
            >
              저작권안내
            </Typography>
          </Wrapper.Item>
          <Wrapper.Item css={style.footerLeftItem}>
            <Link href="/market">
              <Typography
                fontSize="body-14"
                fontWeight="regular"
                lineHeight="150%"
                color="greyScale-6"
              >
                매장
              </Typography>
            </Link>
            <Link href="/magazine">
              <Typography
                fontSize="body-14"
                fontWeight="regular"
                lineHeight="150%"
                color="greyScale-6"
              >
                슈마매거진
              </Typography>
            </Link>
            <Link href="/community">
              <Typography
                fontSize="body-14"
                fontWeight="regular"
                lineHeight="150%"
                color="greyScale-6"
              >
                커뮤니티
              </Typography>
            </Link>
            <Link href="/partnership">
              <Typography
                fontSize="body-14"
                fontWeight="regular"
                lineHeight="150%"
                color="greyScale-6"
              >
                제휴업체
              </Typography>
            </Link>
            <Link href="/inquiry">
              <Typography
                fontSize="body-14"
                fontWeight="regular"
                lineHeight="150%"
                color="greyScale-6"
              >
                문의하기
              </Typography>
            </Link>
          </Wrapper.Item>
        </Wrapper.Left>
        <Wrapper.Right css={style.footerRight}>
          <Typography
            fontSize="body-14"
            fontWeight="regular"
            lineHeight="150%"
            color="greyScale-6"
          >
            이용약관
          </Typography>
          <Typography
            fontSize="body-14"
            fontWeight="regular"
            lineHeight="150%"
            color="greyScale-6"
          >
            개인정보처리방침
          </Typography>
        </Wrapper.Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
