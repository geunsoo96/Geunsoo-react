import styled from 'styled-components';
export default function TestMarkup() {
  const LoginHeader = styled.div`
    width: 1277px;
    text-align: center;
    font-size: 2rem;
  `;
  const LoginBox = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: none;
    margin: 5px;
  `;
  const LoginResponse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const A = styled.a`
    text-decoration: none;
    &:hover {
    }

    &:link {
    }

    &:visited {
    }

    &:active {
    }
  `;
  const OprionMenu = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-between;
  `;
  const LoginFind = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const IdOption = styled.div`
    display: flex;
  `;
  // const security = styled.div`

  // `
  return (
    <>
      <LoginHeader>
        <b>로그인</b>
      </LoginHeader>
      <div id='login-main'>
        <LoginResponse>
          <LoginBox placeholder='아이디'></LoginBox>
          <LoginBox placeholder='비밀번호'></LoginBox>
          <OprionMenu>
            <IdOption>
              <button></button>
              <div>아이디 저장</div>
            </IdOption>
            <LoginFind>
              <A href='http://naver.com'>아이디 찾기</A>
              <div>|</div>
              <A href='http://naver.com'>비밀번호 찾기</A>
            </LoginFind>
          </OprionMenu>
          <a href='http://naver.com'>로그인</a>
          <div>
            <p>※</p>
            <a href='http://naver.com'>보안접속</a>
          </div>
        </LoginResponse>
        <div id='ppl'></div>
      </div>
    </>
  );
}
