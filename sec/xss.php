<html>
    <head>
        <title>XSS Demo</title>
        <style>
            input[type=text]{
                width: 500px;
            }
        </style>
    </head>
    <body>
        <h1>Cross-Site Scripting Demo</h1>
        <p>Here is an example of a simple search form, and how it may be 
exploited. Search for something in the box below. Your search query will be 
printed into the document.</p>
        <p>Pay special attention to how different browsers treat the output 
differently.</p>

        <form action='#' method='get'>
            <input type='text' name='search' placeholder='Type a search term here.'>
            <input type='submit' value='Search'>
        </form>

        <?php if(isset($_GET['search'])):?>
        <h2>You searched for:</h2>
        <?= $_GET['search']; ?>
        <?php endif;?>
    </body>
</html>
