<!doctype html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8" />
    <title>Phaser - Making your first game, part 9</title>
	<script type="text/javascript" src="{{ site.baseurl }}/js/phaser.min.js"></script>
    <style type="text/css">
        body {
            margin: 0;
            background: #f1f1f1;
            display: flex;
            flex-direction: row-reverse;
            overflow: scroll !important;
            height: 100vh;
        }

        .sidenav {
            margin: 1.5rem;
            width: 100%;
            overflow: scroll;
        }

        .sidenav section {
            width: 75%;
            display: inline-block;
            margin-right: 0;
            float: left;
        }

        .sidenav section:last-of-type {
            width: 25%;
            float: right;
            text-align: right;
        }
    </style>
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/main.css" type="text/css">
    <!-- <link rel="stylesheet" href="{{ site.baseurl }}/highlighting.css" type="text/css"> -->
    <link rel="stylesheet" href="{{ site.baseurl }}/styles.css" type="text/css">
</head>
<body>
    <main class="sidenav">
        <div>
            <section>
                <h3>{{ page.title }}</h3>
                <h4>{{ page.subtitle }}</h4>
                <p>{{ page.description }}</p>
                <p>{{ content }}</p>
            </section>
            <section>
                <p>
                    <a href="{{ site.baseurl }}/">Home</a>
                </p>
                <p>
                    <a href="{{ site.baseurl }}/demos/1/">Demos</a>
                </p>
                <p>
                    <a href="{{ site.baseurl }}{{ page.previous_page }}">Previous</a>
                </p>
                <p>
                    <a href="{{ site.baseurl }}{{ page.next_page }}">Next</a>
                </p>
            </section>
        </div>
        {% include javascript/{{ page.slug }}.js %}
    </main>

    
    
</body>
</html>