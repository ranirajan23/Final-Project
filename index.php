
<?php
session_start();
    $_SESSION;

    include("connection.php");
	include("functions.php");
    $user_data = check_login($con);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <a href="logout.php">Logout</a>

    Hello, <?php echo $user_data['user_name']; ?>

<br>
</head>
<body>
<?php
        // Include the content of index.html
        include 'index.html';
    ?>
</body>
</html>