import styled from 'styled-components';
import tw from 'twin.macro';

interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div<{ color?: ILogoProps['color'] }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  ${tw`h-6 md:h-9 w-auto`};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img
          src={
            bgColor === 'dark'
              ? 'assets/images/car-logo-dark.png'
              : 'assets/images/car-logo.png'
          }
          alt='logo'
        />
      </Image>
      <LogoText color={color || 'dark'}>Yourcar.</LogoText>
    </LogoContainer>
  );
}
