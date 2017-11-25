<!DOCTYPE html>
<html>
<title>Encorp Fuel System</title>
<style>
body
{
 
 
background-color:#F8F8F2;
 
}
#logo{
	
	position:fixed;
    top: 30%;
    left: 45%;
	
	
	
	
	
	
}
#button1{
	
	position:fixed;
    top: 40%;
    left: 25%;
	
	
	
	
	
	
}
#button2{
	
	position:fixed;
    top: 40%;
    left: 45%;
	
	
	
	
	
	
}
#button3{
	
	position:fixed;
    top: 40%;
    left: 65%;
	
	
	
	
	
	
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #6F3662;
  border: none;
  color: white;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 220px;
  height: 80px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

}
 
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
 
.button span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
 
.button:hover span {
  padding-right: 25px;
}
 
.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
</head>
<body>
 
    <h1 id="logo">Encorp Fuel System</h1>
 
<a href="login.html" class="button" id = "button1" style="vertical-align:middle"><span>Attendant</span></button>
<br>
<a href="login2.html" class="button" id = "button2" style="vertical-align:middle"><span>Account Department</span></button>
<br>
<a href="login3.html" class="button" id = "button3" style="vertical-align:middle"><span>Staff Department</span></button>

 
</body>
</html>