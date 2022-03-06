function weight() {
    document.getElementById("done").innerHTML="Your weight has been entered! :)";
    myweight=document.getElementById("weight").value;
    sunweight=myweight*27.9307;
    mercuryweight=myweight*0.3772;
    venusweight=myweight*0.9042;
    marsweight=myweight*0.3782;
    jupiterweight=myweight*2.3568;
    saturnweight=myweight*1.0642;
    uranusweight=myweight*0.8858;
    neptuneweight=myweight*1.1213;
    document.getElementById("sun_weight").innerHTML=sunweight;
    document.getElementById("mercury_weight").innerHTML=mercuryweight;
    document.getElementById("venus_weight").innerHTML=venusweight;
    document.getElementById("earth_weight").innerHTML=myweight;
    document.getElementById("mars_weight").innerHTML=marsweight;
    document.getElementById("jupiter_weight").innerHTML=jupiterweight;
    document.getElementById("saturn_weight").innerHTML=saturnweight;
    document.getElementById("uranus_weight").innerHTML=uranusweight;
    document.getElementById("neptune_weight").innerHTML=neptuneweight;
}