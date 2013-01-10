<html>
    <head>
        <title>User-Agent Content Switch</title>
    </head>
    <body>
        <h1>User-Agent Content Switching</h1>
        <p>It is possible to serve up different site context to different 
User-Agents. This technique is sometimes used to display different sets of 
content to users and search engines.</p>

        <h2>Content</h2>
        <?php if(stripos($_SERVER['HTTP_USER_AGENT'], 'google') !== false):?>
        <p>VIAGRA! VIAGRA! VIAGRA!</p>

        <?php else: ?>
        <p>Welcome to example.com, here we <em>blah blah blah</em>...</p>
        <?php endif;?>
    </body>
</html>
