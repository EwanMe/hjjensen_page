function createNav() {
    var bar = '';
    bar += '<div class="logo">'
    bar += '<a href="index.html"><img src="images/logo.png" alt="Trondheim Sykkelkjøkken" height="200" width="200"></a>';
    bar += '</div>'
    bar += '<nav class="navbar" role="navigation">';
    bar += '<ul class="nav_list">';
    bar += '<li id="about"><a href="about.html">OM OSS</a></li>';
    bar += '<li id="blog"><a href="blog.html">BLOGG</a></li>';
    bar += '<li id="program"><a href="program.html">PROGRAM</a></li>';
    bar += '<li id="resources"><a href="resources.html">RESSURSER</a></li>';
    bar += '<li id="getinvolved"><a href="get_involved.html">BLI INVOLVERT</a></li>';
    bar += '<li id="contact"><a href="contact.html">KONTAKT</a></li>';
    bar += '</ul>';
    bar += '</nav>';

    document.getElementById("navContainer").innerHTML = bar;
};

createNav()
