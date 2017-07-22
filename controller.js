const weatherSearch = require( './search' );
const weatherAdmin = require( './admin' );

//================
// INPUTS
//================
const userInputs = process.argv;

const adminMode = 'admin';
const userMode = 'user';

parseUserInput();

function parseUserInput()
{
    switch( userInputs[2] )
    {
        case adminMode:
            onAdminRequest();
            break;

        case userMode:
            onUserSearch();
            break;

        default:
            break;
    }
}

function onUserSearch()
{
    weatherSearch( getUser(), buildSearchQuery() );
}

function onAdminRequest()
{

}

//get all the inputs a user has input and build and return a string from it
function buildSearchQuery()
{
    //console.log( userInputs );
    let tempInput = "";

    for( let i = 4; i < userInputs.length; ++i )
    {
        //dont add the plus if its at the end
        i == userInputs.length - 1 ? tempInput += userInputs[i] : tempInput += userInputs[i] + "+";
    }

    return tempInput;
}

function getUser()
{
    return userInputs[3];
}