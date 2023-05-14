import styled from 'styled-components';

export const Descriptin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Avatar = styled.img`
width: 200px;
height: 200px;
background-color: ${p=>p.theme.colors.primary};
border-radius: 50%;
`;

export const Name = styled.h2`
   margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
`;

export const Tag = styled.p`
    margin-top: 5px;
    font-size: 14px;
    color: ${p=>p.theme.colors.secondary};
`;


