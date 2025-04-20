<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CraftWar - Warcraft Player Guide</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
    <!-- Header Image -->
    <div class="image-container">
        <img src="{{ asset('images/craftwar.jpg') }}" alt="CraftWar Warcraft Guide">
    </div>

    <h1>CraftWar - Warcraft Player Guide</h1>

    <div class="welcome-box">
        <h2>Welcome to the CraftWar Warcraft Guide!</h2>
        <p><strong>Your essential resource for mastering Warcraft strategy</strong></p>
        
        <p>Whether you're a complete beginner or looking to refine your skills, this guide will help you understand the core mechanics, strategies, and secrets of Warcraft gameplay.</p>
        
        <p>We currently have over 5,000 active members sharing strategies and tips daily. Join our community to improve your gameplay!</p>
    </div>

    <h2>Getting Started</h2>
    <p>Begin your Warcraft journey with these essential first steps:</p>
    <ul>
        <li><strong>Choose your race wisely</strong> - Each has unique strengths and playstyles</li>
        <li><strong>Master basic build orders</strong> - The foundation of all strategies</li>
        <li><strong>Learn hotkeys</strong> - Dramatically improves your speed and efficiency</li>
        <li><strong>Practice last-hitting</strong> - Crucial for resource management</li>
        <li><strong>Understand fog of war</strong> - Vision control wins games</li>
    </ul>

    <div class="tip-box">
        <h4>Pro Tip:</h4>
        <p>Spend your first 10 games focusing solely on worker production and resource gathering. Perfecting these fundamentals will give you a massive advantage later.</p>
    </div>

    <hr>

    <!-- Race/Role Overview -->
    <h2>Race Overview</h2>
    <div class="role-container">
        <div class="role-box">
            <h4>Humans</h4>
            <p>Versatile and balanced with strong defensive capabilities. Excellent for beginners.</p>
            <ul>
                <li>Strong towers and buildings</li>
                <li>Flexible army composition</li>
                <li>Powerful spellcasters</li>
            </ul>
        </div>
        <div class="role-box">
            <h4>Orcs</h4>
            <p>Aggressive and durable with powerful melee units. Great for players who like to attack early.</p>
            <ul>
                <li>Tough units with high HP</li>
                <li>Excellent raiding potential</li>
                <li>Strong heroes</li>
            </ul>
        </div>
        <div class="role-box">
            <h4>Undead</h4>
            <p>Macro-intensive with powerful late-game options. Best for experienced players.</p>
            <ul>
                <li>Unique resource system</li>
                <li>Powerful spell combinations</li>
                <li>Strong air units</li>
            </ul>
        </div>
        <div class="role-box">
            <h4>Night Elves</h4>
            <p>Mobile and stealthy with excellent hit-and-run tactics. Good for micro-managers.</p>
            <ul>
                <li>Fast, fragile units</li>
                <li>Strong scouting</li>
                <li>Unique moonwell system</li>
            </ul>
        </div>
    </div>

    <hr>

<!-- Hero Images -->
<div class="hero-gallery">
    <div class="hero-container" onclick="showHeroDetails('Barathrum')">
        <img class="img" src="{{ asset('images/Barathrum.jpeg') }}" alt="Barathrum">
        <div class="hero-name">Barathrum</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Bloodseeker')">
        <img class="img" src="{{ asset('images/Bloodseeker.jpeg') }}" alt="Bloodseeker">
        <div class="hero-name">Bloodseeker</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Doombringer')">
        <img class="img" src="{{ asset('images/Doombringer.jpeg') }}" alt="Doombringer">
        <div class="hero-name">Doombringer</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Invoker')">
        <img class="img" src="{{ asset('images/INVOKER.jpeg') }}" alt="Invoker">
        <div class="hero-name">Invoker</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Naix')">
        <img class="img" src="{{ asset('images/Na_ix.jpeg') }}" alt="Na'ix">
        <div class="hero-name">Na'ix</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Terrorblade')">
        <img class="img" src="{{ asset('images/Terrorblade.jpeg') }}" alt="Terrorblade">
        <div class="hero-name">Terrorblade</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Luna')">
        <img class="img" src="{{ asset('images/Luna.jpeg') }}" alt="Luna">
        <div class="hero-name">Luna</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Lina')">
        <img class="img" src="{{ asset('images/Lina.jpeg') }}" alt="Lina">
        <div class="hero-name">Lina</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Rylai')">
        <img class="img" src="{{ asset('images/Rylai.jpeg') }}" alt="Rylai">
        <div class="hero-name">Rylai</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Mirana')">
        <img class="img" src="{{ asset('images/Mirana.jpeg') }}" alt="Mirana">
        <div class="hero-name">Mirana</div>
    </div>
    <div class="hero-container" onclick="showHeroDetails('Mortred')">
        <img class="img" src="{{ asset('images/Mortred.jpeg') }}" alt="Mortred">
        <div class="hero-name">Mortred</div>
    </div>
</div>
        <div class="image-caption">Popular Hero Choices for Different Playstyles</div>
    </div>

    <!-- Hero Details Modal -->
    <div id="heroModal" class="hero-modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <div id="heroContent">
                <!-- Content will be inserted here by JavaScript -->
            </div>
        </div>
    </div>

    <h2>Essential Strategies</h2>
    <table>
        <tr>
            <th>Strategy</th>
            <th>Best Race</th>
            <th>Difficulty</th>
            <th>When to Use</th>
        </tr>
        <tr>
            <td>Tower Rush</td>
            <td>Human/Orc</td>
            <td>Medium</td>
            <td>Early game aggression</td>
        </tr>
        <tr>
            <td>Fast Expansion</td>
            <td>Undead/Night Elf</td>
            <td>Hard</td>
            <td>When scouting passive opponent</td>
        </tr>
        <tr>
            <td>Mass Air</td>
            <td>All</td>
            <td>Easy</td>
            <td>Late game when anti-air is weak</td>
        </tr>
        <tr>
            <td>Hero Harass</td>
            <td>Night Elf/Undead</td>
            <td>Hard</td>
            <td>Against greedy opponents</td>
        </tr>
    </table>

    <div class="tip-box">
        <h4>Advanced Tip:</h4>
        <p>Learn to "creep jack" - wait for your opponent to start fighting neutral creeps, then attack when their army is weakened.</p>
    </div>

    <hr>

    <h2>Community Resources</h2>
    <ul>
        <li><a href="#">Daily Strategy Discussions</a></li>
        <li><a href="#">Replay Analysis Forum</a></li>
        <li><a href="#">Build Order Calculator</a></li>
        <li><a href="#">Tournament Schedule</a></li>
        <li><a href="#">Patch Notes Archive</a></li>
    </ul>

    <h2>Community Comment</h2>
    <ul>
        <li><p>Comment Section</p></li>
        <div>
            @if(session()->has('success'))
                <div style="color: green; padding: 10px; background: #eaffea; margin-bottom: 15px;">
                    {{session('success')}}
                </div>
            @endif
        </div>
        <div>
            <div>
                <a href="{{ route('product.create')}}">Create Comment</a>
            </div>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                @foreach($products as $product)
                    <tr>
                        <td>{{$product->id}}</td>
                        <td>{{$product->name}}</td>
                        <td>{{$product->qty}}</td>
                        <td>{{$product->price}}</td>
                        <td>{{$product->description}}</td>
                        <td>
                            <a href="{{ route('product.edit', ['product' => $product])}}">Edit</a>
                        </td>
                        <td>
                            <form method="post" action="{{ route('product.delete', ['product' => $product])}}">
                                @csrf
                                @method('delete')
                                <input type="submit" value="Delete" />
                            </form>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
    </ul>
    

    <div class="info-links">
        <h3>Guide Information</h3>
        <p>Last Updated: June 2023 • Version 3.2 • <a href="#">Contribute to this Guide</a></p>
    </div>

 <script src="{{ asset('js/scripts.js') }}"></script>
</body>
</html>