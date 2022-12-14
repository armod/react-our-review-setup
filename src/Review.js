import React, { useState } from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(1);
    const {name, job, image, text} = people[index];

    const checNumber = (num) => {
        if(num > people.length -1)
        {
            return 0;
        }
        if(num < 0){
            return people.length -1;
        }
        return num;
    }
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checNumber(newIndex);
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checNumber(newIndex);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if(randomNumber == index){
            randomNumber = index + 1;
        }
        setIndex(checNumber(randomNumber));
        console.log(randomNumber);
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaChevronRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>suprase me</button>
        </article>
    )
  };

export default Review
