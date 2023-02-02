import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getCookie } from '../../util/cookie';

const Container = styled.div`
  margin-top: 100px;
  .iframeDiv {
    width: 100%;
    height: 750px;
    border: none;
    @media screen and (max-width: 768px) {
      height: 510px;
    }
  }
`;

const CommentList = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 16px 5px;
  background: #0c7b93;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
  overflow-y: auto;
`;

const CommentInputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 62px;
  background: #142850;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 20px 20px;
`;

const CommentInput = styled.input`
  padding: 0px 10px;
  height: 30px;
  background-color: #ffffff;
  border: 0;
  outline: none;
  box-shadow: 0px 0px 0px #cbdafc;
  border-radius: 4px 0px 0px 4px;
  &:focus {
    border: 3px solid #4c77db;
  }
`;

const CommentButton = styled.div`
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -0.32px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00a8cc;
  border-radius: 0px 4px 4px 0px;
  padding: 0px 12px;
  :hover {
    cursor: pointer;
    background: #0c7b93;
  }
`;

const Comment = styled.div`
  padding: 16px;
  background-color: ${({ bgMyColor }) => (bgMyColor ? 'pink' : 'white')};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  color: ${({ bgMyColor }) => (bgMyColor ? '#3e3e3e' : 'black')};
  position: relative;
  margin-top: 13px;
  border-radius: 10px;
`;

// const CommentName = styled.span`
//   font-size: 12px;
//   margin-top: 10px;
// `;

const CommentDate = styled.div`
  font-size: 12px;
  margin-top: 8px;
  text-align: end;
`;

const Triangle = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${({ bgMyColor }) => (bgMyColor ? 'pink' : 'white')};
  transform: rotate(135deg);
  position: absolute;
  top: 19px;
  right: -3px;
`;

const Update = styled.img`
  width: 14px;
  margin-left: 12px;
  margin-right: 7px;
  cursor: pointer;
`;

const Delete = styled.img`
  width: 14px;
  cursor: pointer;
`;

const videoData = [
  {
    guideName: '최윤정',
    linkUrl: 'https://widget.taggbox.com/119414',
  },
  {
    guideName: '이동국',
    linkUrl: 'https://widget.taggbox.com/121091',
  },
  {
    guideName: '최진우',
    linkUrl: 'https://widget.taggbox.com/121092',
  },
  {
    guideName: '김원도',
    linkUrl: 'https://widget.taggbox.com/121097',
  },
  {
    guideName: '유성민',
    linkUrl: 'https://widget.taggbox.com/121085',
  },
  {
    guideName: '김동현',
    linkUrl: 'https://widget.taggbox.com/121095',
  },
];

function MainBox({ courseData, id, sessionUserId, commentRef }) {
  const [comment, setComment] = useState('');
  const [updateState, setUpdateState] = useState(false);
  const [patchId, setPatchId] = useState(null);
  const blurRef = useRef();
  const commentHandler = e => {
    setComment(e.target.value);
  };
  console.log(courseData);
  const postHandler = () => {
    if (comment.replace(/^\s+|\s+$/g, '') === '') {
      setComment('');
    } else if (comment.length > 0 && updateState === false) {
      axios
        .post(
          'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/comment',
          {
            content: comment,
            userId: sessionUserId,
            courseId: parseInt(id, 10),
          },
          {
            headers: {
              authorization: getCookie('accessToken'),
            },
          },
        )
        .then(() => window.location.reload());
    } else if (comment.length > 0 && updateState === true) {
      axios
        .patch(
          `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/comment/${patchId}`,
          {
            content: comment,
            userId: sessionUserId,
            courseId: parseInt(id, 10),
          },
          {
            headers: {
              authorization: getCookie('accessToken'),
            },
          },
        )
        .then(() => window.location.reload());
    }
  };

  const enterHandler = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      postHandler();
      blurRef.current.blur();
    }
  };

  const updateHandler = commentId => {
    setComment('');
    setUpdateState(true);
    setPatchId(commentId);
    blurRef.current.focus();
  };

  const deleteHandler = commentId => {
    axios
      .delete(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/comment/${commentId}`,
        {
          headers: {
            authorization: getCookie('accessToken'),
          },
        },
      )
      .then(() => window.location.reload());
  };

  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (courseData !== null) {
      setVideo(
        videoData.filter(i => {
          return i.guideName === courseData.guideName;
        }),
      );
    }
  }, [courseData]);

  return (
    <Container className="row flex-column flex-md-row">
      <main className="col-md-8 px-0 flex-grow-1 mb-5">
        <p className="fs-4 mb-3 ms-3">관련 영상</p>
        {video !== null && (
          <iframe
            title="taggbox"
            src={video[0].linkUrl}
            className="iframeDiv"
          />
        )}
      </main>
      <aside className="col-md-4 ps-3">
        <p className="fs-4 mb-3">댓글 목록</p>
        <CommentList ref={commentRef}>
          {courseData !== null
            ? courseData.comments.map(ele => {
                let hour = Number(ele.createdAt.slice(-8, -6)) + 18;

                if (hour > 24) {
                  hour = Number(ele.createdAt.slice(-8, -6)) - 6;
                } else if (hour > 18) {
                  hour = Number(ele.createdAt.slice(-8, -6)) + 18;
                }
                const myComment = ele.userId === Number(sessionUserId);

                return (
                  <div key={ele.commentId}>
                    <Comment bgMyColor={myComment}>
                      {ele.content}
                      {myComment ? (
                        <>
                          <Update
                            src="/img/edit.png"
                            onClick={() => updateHandler(ele.commentId)}
                          />
                          <Delete
                            src="/img/trash.png"
                            onClick={() => deleteHandler(ele.commentId)}
                          />
                        </>
                      ) : null}
                      <Triangle bgMyColor={myComment} />
                    </Comment>
                    <CommentDate>
                      익명{ele.userId} &ensp;
                      {ele.createdAt.slice(2, 10)}
                      &ensp;
                      {String(hour) + ele.createdAt.slice(-6, -3)}
                    </CommentDate>
                  </div>
                );
              })
            : null}
        </CommentList>
        <CommentInputSection>
          <CommentInput
            ref={blurRef}
            className="col-9 col-sm-10"
            value={comment}
            placeholder="댓글 달기"
            onChange={commentHandler}
            onKeyUp={enterHandler}
          />
          <CommentButton className="col-3 col-sm-2" onClick={postHandler}>
            {updateState ? '수정' : '게시'}
          </CommentButton>
        </CommentInputSection>
      </aside>
    </Container>
  );
}

export default MainBox;
