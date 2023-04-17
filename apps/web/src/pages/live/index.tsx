import * as React from 'react';
import {
  Button,
  Container,
  Title,
  Wrapper,
  Pagination,
  Typography,
  applyMediaQuery,
  Input,
} from '@supercarmarket/ui';
import Layout from 'components/layout';
import { css } from 'styled-components';
import { useBroadCast } from 'http/server/live/queries';
import { type NextPageWithLayout } from '@supercarmarket/types/base';
import { useRouter } from 'next/router';
import Modal from 'components/live/modal';
import { checkIsMakeRoom, checkPasswordRoom } from 'http/server/live';

import LockerIcon from 'public/images/live/icons/LockerIcon.svg';

const Index: NextPageWithLayout = () => {
  const {
    data: broadCast,
    isLoading,
    isFetching,
  } = useBroadCast({
    page: 1,
    pageSize: 16,
  });

  const router = useRouter();

  if (isLoading || isFetching || !broadCast) return <div>loading..</div>;

  const checkUserAuth = async () => {
    let isMakeRoom = false;

    await checkIsMakeRoom()
      .then((response) => {
        isMakeRoom = true;
      })
      .catch((error) => {
        alert(error);
      });

    if (!isMakeRoom) {
      return;
    }
    router.push('/live/Create');
  };

  return (
    <Container>
      <Wrapper
        css={css`
          padding-bottom: 40px;
        `}
      >
        <Wrapper.Item
          css={css`
            display: flex;
          `}
        >
          <Title>라이브</Title>
          <Button variant="Primary-Line" type="button" onClick={checkUserAuth}>
            라이브 시작하기
          </Button>
        </Wrapper.Item>
        {broadCast && (
          <Wrapper.Item
            css={css`
              margin-top: 20px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              column-gap: 20px;
              row-gap: 40px;
              ${applyMediaQuery('mobile')} {
                grid-template-columns: 1fr 1fr;
                column-gap: 8px;
                row-gap: 16px;
              }
            `}
          >
            {broadCast.data?.map((data, idx) => {
              return <LiveItem key={`LiveItem_${idx}`} data={data} />;
            })}
          </Wrapper.Item>
        )}
      </Wrapper>
      <Pagination pageSize={1} totalCount={1} totalPages={1} />
    </Container>
  );
};

Index.Layout = Layout;

export default Index;

interface LiveItem {
  id: number;
  isPrivate: boolean;
  tags: string[];
  thumbnailUrl: string;
  title: string;
  name: string;
}

const LiveItem = ({ data }: { data: LiveItem }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const clickItem = () => {
    if (data.isPrivate) {
      setIsOpen(true);
    } else router.push(`live/${data.id}`);
  };
  return (
    <div onClick={clickItem}>
      <Container
        style={{
          cursor: 'pointer',
        }}
      >
        <Wrapper.Item
          css={css`
            width: 100%;
            height: 180px;
            background-color: #000000;
            margin: auto;
            position: relative;
          `}
        >
          <img
            src={data.thumbnailUrl}
            style={{ width: '100%', height: '100%' }}
            alt={`${data.title}`}
          />
          <Wrapper.Item
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              background: linear-gradient(
                  180.34deg,
                  rgba(0, 0, 0, 0.2) 0.29%,
                  rgba(0, 0, 0, 0.1) 29.42%,
                  rgba(0, 0, 0, 0) 74.86%
                ),
                #eaeaec;
              opacity: 0.7;
            `}
          />
          <Wrapper.Item
            css={css`
              position: absolute;
              right: 5%;
              top: 4.17%;
              bottom: 8.33%;
              width: 16px;
              height: 21px;
              opacity: 1;
            `}
          >
            <LockerIcon />
          </Wrapper.Item>
        </Wrapper.Item>
        <Wrapper.Item
          css={css`
            margin: auto;
            width: 95%;
            margin-top: 20px;
          `}
        >
          <Wrapper.Item
            css={css`
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
            `}
          >
            {data.name}
          </Wrapper.Item>
          <Wrapper.Item
            css={css`
              font-weight: 700;
              font-size: 16px;
              line-height: 19.2px;
              margin-top: 10px;
            `}
          >
            {data.title}
          </Wrapper.Item>
          <Wrapper.Item
            css={css`
              font-weight: 700;
              font-size: 14px;
              line-height: 21px;
              color: #b78f7b;
              margin-top: 10px;
            `}
          >
            {data.tags.map((data: string) => {
              return `#${data}`;
            })}
          </Wrapper.Item>
        </Wrapper.Item>
      </Container>
      <Modal open={isOpen}>
        <PasswordModal roomData={data} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

const PasswordModal = ({
  roomData,
  setIsOpen,
}: {
  roomData: LiveItem;
  setIsOpen: (prev: boolean) => void;
}) => {
  const router = useRouter();

  const passwordInputRef = React.useRef<HTMLInputElement | null>(null);

  const cancelClick = () => {
    setIsOpen(false);
  };

  const confirmClick = async () => {
    checkPasswordRoom(roomData.id, passwordInputRef.current?.value ?? '')
      .then((response) => {
        if (response.data === 'SUCCESS') {
          router.push(`/live/${roomData.id}`);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Wrapper.Item
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        gap: 24px;
        background: #ffffff;
        border-radius: 4px;
      `}
    >
      <Typography
        style={{
          fontSize: '24px',
          lineHeight: '120%',
          fontWeight: '700',
        }}
      >
        {roomData.title}
      </Typography>
      <Wrapper.Item
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px 20px;
          gap: 10px;
        `}
      >
        <Typography>비밀번호</Typography>
        <Input
          ref={passwordInputRef}
          style={{
            width: '360px',
            marginLeft: 'auto',
          }}
          placeholder="비밀번호를 입력하세요"
        />
      </Wrapper.Item>
      <Wrapper.Item
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0px 22px;
          gap: 4px;
        `}
      >
        <Button variant="Primary-Line" width="120px" onClick={cancelClick}>
          취소
        </Button>
        <Button variant="Primary" width="120px" onClick={confirmClick}>
          확인
        </Button>
      </Wrapper.Item>
    </Wrapper.Item>
  );
};
