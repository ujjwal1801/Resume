/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ujjwal Sharma",
    "role": "Front-end-WebDevloper",
    "contacts": {
        "mobile": "7009025474",
        "email": "sharmaujjwal180@gmail.com",
        "github": "github.com/ujjwal180",
        "twitter": "twitter.com/ujjwal/180",
        "location": "Chandigarh"
    },
    "welcomeMessage": "omne quod licet nihil",
    "skills": ["HTML", "CSS", "JAVASCRIPT", "C", "C++"],
    "biopic": "images/DP.JPG",

};
bio.display = function() {
    var nname = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
    var nmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var nmail = HTMLemail.replace("%data%", bio.contacts.email);
    var ntwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var ngit = HTMLgithub.replace("%data%", bio.contacts.github);
    var nloc = HTMLlocation.replace("%data%", bio.contacts.location);
    var nbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var nwelc = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(nname);
    $("#topContacts").append(nmobile);
    $("#topContacts").append(nmail);
    $("#topContacts").append(ntwitter);
    $("#topContacts").append(ngit);
    $("#topContacts").append(nloc);
    $("#header").append(nbiopic);
    $("#header").append(nwelc);

    var i = 0;
    while (i < bio.skills.length) {
        var nskill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(nskill);
        i = i + 1;
    }

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};
bio.display();

var education = {

    'schools': [{
        'name': 'Chitkara University',
        'location': 'Chandigarh',
        'degree': 'Undergraduate',
        'majors': ['Computer-Science'],
        'dates': '2015-19',
        'url': 'www.gitarattan.com'
    }],

    'onlineCourses': [{
        'title': 'Front-end Nanodgree',
        'school': 'Udacity',
        'dates': '2017',
        'url': 'www.udacity.com'
    }]

};

education.display = function() {
    $('#education').append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var nsname = HTMLschoolName.replace("%data%", education.schools[i].name);
        var nsdegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var nsdates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var nsloc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var nsmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $('.education-entry').append(nsname);
        $('.education-entry').append(nsdegree);
        $('.education-entry').append(nsdates);
        $('.education-entry').append(nsloc);
        $('.education-entry').append(nsmajor);



    }
    for (i = 0; i < education.onlineCourses.length; i++) {
        var nocTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
        var nocSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
        var nocDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
        var nocUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
        $('.education-entry').append(nocTitle);
        $('.education-entry').append(nocSchool);
        $('.education-entry').append(nocDates);
        $('.education-entry').append(nocUrl);

    }
};

var work = {
    'jobs': [{
        'employer': 'Google',
        'title': 'Senior Developer',
        'location': 'San Francisco',
        'dates': 'in progress',
        'description': 'Best job Ever'

    }]
};

work.display = function() {

    $('#workExperience').append(HTMLworkStart);

    for (i = 0; i < work.jobs.length; i++) {

        var nwemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

        var nwtitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

        var nwdates = HTMLworkDates.replace("%data%", work.jobs[i].dates);

        var nwloc = HTMLworkLocation.replace("%data%", work.jobs[i].location);

        var nwdesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $('.work-entry').append(nwtitle);
        $('.work-entry').append(nwemployer);

        $('.work-entry').append(nwdates);
        $('.work-entry').append(nwloc);
        $('.work-entry').append(nwdesc);

    }
};

var projects = {
    'projects': [{
        'title': 'Android Application',
        'dates': '2017',
        'desc': 'Android application based on fleet calculator',
        'images': ['images/android.png', 'images/three.jpg']
    }]


};

projects.display = function() {
    $('#projects').append(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {
        var nptitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);

        var npdates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);

        var npdesc = HTMLprojectDescription.replace('%data%', projects.projects[i].desc);
        $('#projects').append(HTMLprojectStart);
        $('.project-entry').append(nptitle);
        $('.project-entry').append(npdates);
        $('.project-entry').append(npdesc);
        
        for (var j = 0; j < projects.projects[i].images.length; j++) {

            var npimage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
            $('.project-entry:last').append(npimage);
        }
        
    }

};


work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);