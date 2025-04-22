<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/components/navbar/navbar.css">
        <link rel="stylesheet" href="src/components/modal/modal.css">
        <link rel="stylesheet" href="src/components/todolistcomponent/todo.css">
        <link rel="stylesheet" href="src/styles.css">
        <title>Home</title>
    </head>
    <body>
        <nav class="navbar-block">
            <?php include('src/components/navbar/navbar.phtml'); ?>
        </nav>

        <div class="page-messages">
            <!--messages here-->
        </div>

        <div class="todo-list-block">
            <?php include('src/components/todolistcomponent/todo_list.phtml'); ?>
        </div>
    </body>

    <div class="modals">
        <?php include('src/components/modal/modal.phtml'); ?>
    </div>
</html>