const logger = require( './logger' );
//const keys = require( './keys.js' );
const weather = require( 'weather-js' );


module.exports = search;

function search( tUser, tSearch )
{
    weather.find( { search: tSearch, degree: 'F' }, onSearchComplete );

    function onSearchComplete( tError, tData )
    {
        let tempSearchResultStatus = "";

        if( tError )
        {
            console.log( tError );
            tempSearchResultStatus = "Unsuccessful";
        }
        else
        {
            //console.log( JSON.stringify( tData, null, 2 ) );
            //console.log( JSON.parse( tData ) );
            console.log( tData[0].location.name );
            tempSearchResultStatus = "Successful";
        }

        var tempUserSearch = new UserSearch( tUser, tSearch, tempSearchResultStatus );
        
    }
}

function UserSearch( tName, tSearch, tSearchStatus )
{
    this.name = tName;
    this.search = tSearch;
    this.searchStatus = tSearchStatus;
    this.date = new Date( Date.now() ).toString();

    console.log( this );
}
