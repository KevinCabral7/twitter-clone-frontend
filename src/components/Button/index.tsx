import * as S from './style';

type Props = {
    children: string;
    ref?: string;
    onClick?: () => void;
};
const Button = ({ children, ref, onClick }: Props) => {
    return (
        <S.Button onClick={onClick} href={ref}>
            {children}
        </S.Button>
    );
};

export default Button;
