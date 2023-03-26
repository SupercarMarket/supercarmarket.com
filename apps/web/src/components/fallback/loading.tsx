import 'react-loading-skeleton/dist/skeleton.css';

import { applyMediaQuery, Container, theme, Wrapper } from '@supercarmarket/ui';
import Skeleton from 'react-loading-skeleton';
import { css } from 'styled-components';

interface CardSkeletonProps {
  variant?: 'row' | 'column';
  size?: number;
}

const CardRowSkeleton = ({ size = 12 }: Pick<CardSkeletonProps, 'size'>) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      gap="12px"
      padding="35px 0 0 0"
    >
      {Array.from({ length: size }).map((_, index) => (
        <Container
          key={index}
          width="100%"
          display="flex"
          alignItems="center"
          gap="30px"
        >
          <Skeleton
            style={{
              width: '178px',
              height: '120px',
              borderRadius: '4px',
            }}
          />
          <Wrapper.Item
            css={css`
              flex: 1;
              display: flex;
              & > span {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            `}
          >
            <Skeleton count={2} style={{ width: '100%', height: '25px' }} />
          </Wrapper.Item>
        </Container>
      ))}
    </Container>
  );
};

const CardColumnSkeleton = ({ size = 12 }: Pick<CardSkeletonProps, 'size'>) => {
  return (
    <Container width="100%" display="flex">
      <Wrapper
        css={css`
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
          ${applyMediaQuery('tablet')} {
            grid-template-columns: 1fr 1fr 1fr;
          }

          ${applyMediaQuery('mobile')} {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        {Array.from({ length: size }).map((_, index) => (
          <Container
            key={index}
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
          >
            <Wrapper.Item
              css={css`
                flex: 1;
                width: 100%;
                height: 180px;
                display: flex;
                & > span {
                  flex: 1;
                  display: flex;
                  width: 100%;
                  height: 180px;
                }
              `}
            >
              <Skeleton />
            </Wrapper.Item>
            <Wrapper.Item
              css={css`
                flex: 1;
                width: 100%;
                display: flex;
                & > span {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
              `}
            >
              <Skeleton count={2} />
            </Wrapper.Item>
          </Container>
        ))}
      </Wrapper>
    </Container>
  );
};

const CardSkeleton = ({ variant = 'column', size }: CardSkeletonProps) => {
  return {
    column: <CardColumnSkeleton size={size} />,
    row: <CardRowSkeleton size={size} />,
  }[variant];
};

const MagazineBannerSkeleton = () => {
  return (
    <div>
      <h1 />
    </div>
  );
};

const LinkSkeleton = () => {
  return <Skeleton />;
};

const MarketDetailSkeleton = () => {
  return (
    <Container width="100%" display="flex" flexDirection="column">
      <Wrapper
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;

          ${applyMediaQuery('mobile')} {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        `}
      >
        <Skeleton width={250} height={50} />
        <Skeleton width={70} height={35} />
      </Wrapper>
      <Wrapper
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          ${applyMediaQuery('mobile')} {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        `}
      >
        <Skeleton width={160} height={20} />
        <Skeleton width={180} height={20} />
      </Wrapper>
      <Wrapper
        css={css`
          height: 900px;
          margin-top: 24px;
          margin-bottom: 10px;

          ${applyMediaQuery('mobile')} {
            height: 257px;
          }
        `}
      >
        <Skeleton height="100%" />
      </Wrapper>
      <Wrapper
        css={css`
          display: flex;
          gap: 10.5px;
        `}
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <Wrapper
            key={idx}
            css={css`
              width: 141px;
              height: 89px;

              ${applyMediaQuery('mobile')} {
                width: 80px;
                height: 60px;
              }
            `}
          >
            <Skeleton key={idx} width="100%" height="100%" />
          </Wrapper>
        ))}
      </Wrapper>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Wrapper
          key={idx}
          css={css`
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 60px;
            margin-bottom: 25px;
          `}
        >
          <Skeleton width={83} height={24} />
          <Skeleton height={140} />
        </Wrapper>
      ))}
    </Container>
  );
};

const PartnershipSkeleton = () => {
  return (
    <Wrapper>
      <Wrapper.Item
        css={css`
          display: flex;
          padding: 6px 0;
        `}
      >
        <Wrapper.Item
          css={css`
            width: 196px;
            height: 124px;

            ${applyMediaQuery('mobile')} {
              width: 64px;
              height: 64px;
            }
          `}
        >
          <Skeleton width="100%" height="100%" />
        </Wrapper.Item>
        <Wrapper.Item
          css={css`
            display: flex;
            flex: 1;

            ${applyMediaQuery('mobile')} {
              flex-direction: column;
              gap: 4px;
            }
          `}
        >
          <Wrapper.Item
            css={css`
              ${({ theme }) => css`
                flex: 1;
                width: 403px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 12px;
                box-sizing: border-box;
                padding-left: 30px;

                .title {
                  height: 24px;
                }

                .address {
                }

                ${applyMediaQuery('mobile')} {
                  width: 100%;
                  gap: 4px;
                  padding-left: 12px;

                  .title {
                    font-size: ${theme.fontSize['body-14']};
                  }
                  .address {
                    font-size: ${theme.fontSize['body-12']};
                  }
                }
              `}
            `}
          >
            <Wrapper.Item className="title">
              <Skeleton width="100%" height="100%" />
            </Wrapper.Item>
            <Wrapper.Item className="address">
              <Skeleton width="100%" height="100%" />
            </Wrapper.Item>
          </Wrapper.Item>
          <Wrapper.Item
            css={css`
              ${({ theme }) => css`
                display: flex;
                font-size: ${theme.fontSize['body-14']};
                padding-left: 0;
                align-items: center;
                justify-content: center;
                text-align: center;

                .category {
                  width: 120px;
                }
                .work-time {
                  width: 119px;
                }
                .phone {
                  width: 142px;
                }
                .address {
                  width: 137px;
                }
                .vertical-bar {
                  display: none;
                }
                ${applyMediaQuery('mobile')} {
                  padding-left: 12px;
                  justify-content: flex-start;
                  gap: 8px;

                  .category,
                  .work-time,
                  .phone {
                    width: auto;
                  }
                  .address,
                  .site {
                    display: none;
                  }
                  .vertical-bar {
                    display: block;
                  }
                }
              `}
            `}
          >
            <Wrapper.Item className="category">
              <Skeleton width="70px" />
            </Wrapper.Item>
            <Wrapper.Item className="work-time">
              <Skeleton width="70px" />
            </Wrapper.Item>
            <Wrapper.Item className="phone">
              <Skeleton width="70px" />
            </Wrapper.Item>
            <Wrapper.Item className="address">
              <Skeleton width="70px" />
            </Wrapper.Item>
            <Wrapper.Item className="site">
              <Skeleton width="70px" />
            </Wrapper.Item>
          </Wrapper.Item>
        </Wrapper.Item>
      </Wrapper.Item>
    </Wrapper>
  );
};

const PartnershipDetailSkeleton = () => {
  return (
    <Container>
      <Wrapper
        css={css`
          display: flex;
          gap: 20px;
          margin-bottom: 220px;

          ${applyMediaQuery('mobile')} {
            flex-direction: column;
          }
        `}
      >
        <Wrapper
          css={css`
            width: 590px;
            height: 386px;

            ${applyMediaQuery('mobile')} {
              width: 100%;
              height: 257px;
              margin-bottom: 20px;
            }
          `}
        >
          <Skeleton width="100%" height="100%" />
        </Wrapper>
        <Wrapper
          css={css`
            width: 590px;
            height: 386px;

            ${applyMediaQuery('mobile')} {
              width: 100%;
              height: 257px;
            }
          `}
        >
          <Skeleton width="100%" height="100%" />
        </Wrapper>
      </Wrapper>
      <Wrapper
        css={css`
          width: 100%;
        `}
      >
        <Skeleton height={500} />
      </Wrapper>
    </Container>
  );
};

const CommentSkeleton = () => {
  return (
    <Container width="100%">
      <Wrapper
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          gap: 20px;
          padding: 40px;
          border: 1px solid #eaeaec;
          border-radius: 4px;
          box-sizing: border-box;
          ${applyMediaQuery('mobile')} {
            padding: 16px;
            border: unset;
          }
        `}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <Wrapper.Item
            key={index}
            css={css`
              width: 100%;
              display: flex;
              gap: 12px;
              padding: 20px 0;
              border-bottom: 1px solid ${theme.color['greyScale-3']};
              ${applyMediaQuery('mobile')} {
                padding: 16px 0;
                gap: 8px;
              }
            `}
          >
            <Wrapper.Left
              css={css`
                .react-loading-skeleton {
                  width: 40px;
                  height: 40px;
                  ${applyMediaQuery('mobile')} {
                    width: 24px;
                    height: 24px;
                  }
                }
              `}
            >
              <Skeleton borderRadius="50%" />
            </Wrapper.Left>
            <Wrapper.Right
              css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 8px;
                ${applyMediaQuery('mobile')} {
                  gap: 4.5px;
                }
              `}
            >
              <Wrapper.Top
                css={css`
                  .react-loading-skeleton {
                    width: 150px;
                    height: 18px;
                    ${applyMediaQuery('mobile')} {
                      width: 100px;
                    }
                  }
                `}
              >
                <Skeleton />
              </Wrapper.Top>
              <Wrapper.Bottom
                css={css`
                  .react-loading-skeleton {
                    width: 50%;
                    height: 18px;
                    ${applyMediaQuery('mobile')} {
                      width: 100%;
                    }
                  }
                `}
              >
                <Skeleton />
              </Wrapper.Bottom>
            </Wrapper.Right>
          </Wrapper.Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export {
  CardSkeleton,
  LinkSkeleton,
  CommentSkeleton,
  MagazineBannerSkeleton,
  MarketDetailSkeleton,
  PartnershipSkeleton,
  PartnershipDetailSkeleton,
};
