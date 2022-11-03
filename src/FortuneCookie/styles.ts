import styled from "styled-components";

export const Cookie = styled.button`
  appearance: none;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  margin-top: 20%;

  outline: none;
`;

export const Paper = styled.div`
  background-color: white;
  width: 900px;
  height: 100px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: clip-path 0.6s ease-in-out;
  overflow: hidden;
  position: relative;

  clip-path: polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%);

  ${Cookie}[data-cracked="true"] & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  p {
    width: 80%;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.4%;
  }
  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    bottom: 6px;
    right: 15%;
  }
`;

const CookiePart = styled.img`
  --size: 500px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  transition: inset 0.6s ease-in-out, transform 0.6s ease-in-out;
  bottom: -60px;
`;

export const LeftPartCookie = styled(CookiePart)`
  clip-path: polygon(
    0 100%,
    50% 100%,
    52% 93%,
    51% 86%,
    52% 80%,
    51% 75%,
    52% 70%,
    51% 64%,
    48% 0%,
    0 0
  );

  right: calc(50% - var(--size) / 2);

  ${Cookie}[data-cracked=true] & {
    right: calc(100% - var(--size) / 2);
    transform: rotate(-25deg);
  }
`;
export const RightPartCookie = styled(CookiePart)`
  clip-path: polygon(
    100% 100%,
    50% 100%,
    52% 93%,
    51% 86%,
    52% 80%,
    51% 75%,
    52% 70%,
    51% 64%,
    48% 0%,
    100% 0
  );

  left: calc(50% - var(--size) / 2);
  ${Cookie}[data-cracked=true] & {
    left: calc(100% - var(--size) / 2);
    transform: rotate(30deg);
  }
`;
