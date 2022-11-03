import React from 'react';
import { useState } from 'react';
import '../sites/MainSite.css';

function MainSite(props) {

	return (
        <>
            <div className='nav_bar'>
                <div className='nav_button' onClick={ () => {props.changeSite('LogInSite')} }>Zaloguj się</div>
                <div className='nav_button' onClick={ () => {props.changeSite('BrowseSite')} }>Przeglądaj</div>
                <div className='nav_button' onClick={ () => {props.changeSite('AddSite')} }>Dodaj</div>
                <div className='nav_button' onClick={ () => {props.changeSite('DeleteSite')} }>Usuń</div>
            </div>
        </>
    );
}

export default MainSite;
