// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Function to update donation amount and parallel sections
    $('#donationAmount').on('input', function() {
        var amount = $(this).val();
        $('#donationValue').text('£' + amount); // Update display of selected amount

        // Example calculation (adjust as per your actual conversion rate)
        var migrantsHelped = amount * 1; // Example: 10 pounds = 1 migrant helped
        var jobsSecured = amount * 2; // Example: 50 pounds = 1 job secured
        var housingProvided = amount /2;
        var mealsServed = amount * 3;  

        // Update text parallel to icons
        $('#migrantsHelped').text(migrantsHelped.toFixed(0) + ' Migrants Helped');
        $('#jobsSecured').text(jobsSecured.toFixed(0) + ' Jobs Secured');
        $('#housingProvided').text(housingProvided.toFixed(0) + ' Houses Provided');
        $('#mealsServed').text(mealsServed.toFixed(0) + ' Meals Served');
        // Add more updates for other sections as needed
    });
});


const heaven = " ";


const earth =(dark, light)=> {
    light = "good";
    dark = undefined;
    
}

const manKind = (good, undefined) =>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

} 