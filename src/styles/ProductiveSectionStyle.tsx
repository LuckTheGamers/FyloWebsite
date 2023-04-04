import styled from "styled-components";
import { variablesStyle } from "./variablesStyle";
import curveSectionDesktop from "../assets/images/bg-curve-desktop.svg";
import curveSectionMobile from "../assets/images/bg-curve-mobile.svg"
import { MarginCapsule } from "./GlobalStyle";
import arrow from '../assets/images/icon-arrow.svg';
import snippets from '../assets/images/icon-quotes.svg';

export const ProductiveSectionStyle = styled.section`
    
    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 100px;
        background-image: url(${curveSectionMobile});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .backgroundProductive{
        background-color: ${variablesStyle.colors.gray};

        ${MarginCapsule}{
            padding-bottom: 140px;

            h2{
                margin: 80px 0 30px;
            }

            p{
                color: ${variablesStyle.colors.darkenBlue};
                max-width: ${variablesStyle.others.maxWidthText};
                margin: 0 auto;
            }
            
            .articleInfo{
                p:first-of-type{
                    margin-bottom: 20px;
                }

                div{
                    width: fit-content;
                    margin: 30px auto 50px;

                    &::after{
                        content: '';
                        display: block;
                        width: 100%;
                        height: 2px;
                        background-color: hsl(170, 45%, 43%);
                    }
                    
                    a{ 
                        color: hsl(170, 45%, 43%);
                        text-decoration: none;
                        font-size: 1.2em;

                        &::after{
                            content: '';
                            background-image: url(${arrow});
                            background-repeat: no-repeat;
                            background-size: cover;
                            display: inline-block;
                            margin-left: 10px;
                            width: 20px;
                            height: 20px;
                            vertical-align: middle;
                        }
                    }
                }
            }

            .articleCeo{
                background-color: white;
                padding: 30px 40px 20px;
                border-radius: 10px;
                text-align: start;
                max-width: 400px;
                margin: 0 auto 0;
                box-shadow: ${variablesStyle.others.boxShadowButton};

                .infoFylo{
                    line-height: 26px;
                    font-size: 1em;
                    margin-bottom: 20px;

                    &::before{
                        content: '';
                        display: block;
                        width: 15px;
                        height: 15px;
                        background-image: url(${snippets});
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }

                img{
                    width: 40px;
                    border-radius: 100%;
                    margin-right: 20px;
                }
                
                .divCeo{
                    display: flex;
                    align-items: center;

                    h3{
                        font-weight: bold;
                    }

                    p{
                        font-size: 0.7em;
                    }
                }
            }
        }
    }
    

    @media screen and (min-width: ${variablesStyle.others.screen}){
        &::before{
            background-image: url(${curveSectionDesktop});
        }

        .backgroundProductive{
            padding-top: 50px;

            ${MarginCapsule}{

                .imgPersons{
                    margin: 0 0 0 auto;
                }

                .flexProductive{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: row-reverse;

                    .articlesDiv{

                        .articleInfo{
                            text-align: start;
                            h2{
                                margin-top: 0;
                            }
                            p{
                                margin-left: 0;
                            }
                            
                            div{
                                margin: 30px 0 50px;
                            }
                        }
                        

                        .articleCeo{
                            margin: 0;
                        }
                    }
                }
            }
        }

        
    }
`;