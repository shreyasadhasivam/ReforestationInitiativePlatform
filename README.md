# ReforestationInitiativePlatform

<h5>Steps to execute the program:</h5>

<li>Download and install XAMPP server by following the steps in this youtube video: <a href='https://www.youtube.com/watch?v=at19OmH2Bg4&list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR&index=1'>Installation process</a></li>
<li>Store the directory containing your scripts in C:/XAMPP/htdocs</li>
<li>Go to https://localhost/yourdirectoryname</li>
<li>To activate mail server 
<li>Go to C:/XAMPP/php/php.ini and search using for 'mail function' Ctrl+F and add the following lines:<br>
[mail function]<br>
SMTP = smtp.gmail.com<br>
smtp_port = 465<br>
sendmail_from = youremail@example.com<br>
sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"</li>
<li>Go to C:/XAMPP/sendmail/sendmail.ini and replace the entire script with this:<br>
  [sendmail]<br>
smtp_server = smtp.gmail.com<br>
smtp.port = 465<br>
error_logfile = error.log<br>
debug_logfile = debug.log<br>
auth_username = youremail@example.com<br>  
auth_password = encryptedpassword<br>
force_sender = youremail@example.com<br>
</li>
