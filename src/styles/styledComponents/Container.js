import styled from "styled-components"

export const AccordianContainer = styled.div`
margin: 1rem;
  padding: 0 1rem;
  background: hsl(200 50% 50% / 0.4);
  border-radius: 0.5rem;

  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
  &:hover{
    grid-template-rows: 1fr;
  }
  & p{
    overflow: hidden;
  }
`

export const ParentContainer=styled.div`
--size:80px;
background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=70');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width:var(--size);
aspect-ratio: 1 / 1;
background-color: teal;
border-radius: 50%;
position: relative;
left: 50%;
right: 50%;
top:20vh;

`
export const Circle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: calc(var(--size) / 2);
aspect-ratio: 1 / 1;
background-color: red;
border-radius: 50%;
position: absolute;
left: calc(var(--size) / 2 / 2);
top:  calc(var(--size) / 2 / 2);
--radius:150px;
&:nth-child(1){
  --degree: 45deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree)) * var(--radius))
    );
}
&:nth-child(2){
  --degree:90deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
&:nth-child(3){
  --degree:135deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
&:nth-child(4){
  --degree:180deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
&:nth-child(5){
  --degree:225deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
&:nth-child(6){
  --degree:270deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
&:nth-child(7){
  --degree:315deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
&:nth-child(8){
  --degree:360deg;
  transform: 
  translate(
    calc(cos(var(--degree)) * var(--radius)),
    calc(sin(var(--degree) ) * var(--radius))
    );
}
`