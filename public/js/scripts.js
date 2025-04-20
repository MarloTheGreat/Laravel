

        const heroes = {
            Barathrum: {
                name: "Barathrum, the Spirit Breaker",
                image: "images/Barathrum.jpeg",
                background: "A former celestial herald of the gods, Barathrum was cast down to the mortal realm for his excessive violence. Now he roams the world, charging into battle with unstoppable force, breaking enemy lines and spirits alike.",
                skills: [
                    {
                        name: "Charge of Darkness",
                        description: "Barathrum fixes his sight on an enemy unit and starts charging through everything in his path. All enemy units passed through will be hit by a Greater Bash. The charged unit will be stunned upon impact."
                    },
                    {
                        name: "Empowering Haste",
                        description: "Grants bonus movement speed to nearby allied units. Barathrum also gains damage equal to a percentage of his movement speed."
                    },
                    {
                        name: "Greater Bash",
                        description: "Gives a chance to stun and knockback an enemy unit on an attack. Deals damage based on movement speed. Works on charges."
                    },
                    {
                        name: "Nether Strike",
                        description: "Barathrum slips into the nether realm, reappearing next to his target with a powerful bash. Deals bonus damage based on movement speed."
                    }
                ]
            },
            Bloodseeker: {
                name: "Strygwyr, the Bloodseeker",
                image: "images/Bloodseeker.jpeg",
                background: "A vicious hunter who thrives in the chaos of battle, Bloodseeker can sense wounded prey anywhere on the battlefield. His thirst for blood drives him into a frenzy, making him increasingly dangerous as his enemies weaken.",
                skills: [
                    {
                        name: "Bloodrage",
                        description: "Drives a unit into a bloodthirsty rage. The unit is unable to cast spells, has its attack damage increased, and heals for a percentage of the damage it deals."
                    },
                    {
                        name: "Blood Rite",
                        description: "After a short formation time, creates a ritual blood circle that silences and damages enemies caught in the area of effect."
                    },
                    {
                        name: "Thirst",
                        description: "Bloodseeker is invigorated by the wounds of his enemies, gaining bonus movement speed and attack speed when enemy heroes are at low health."
                    },
                    {
                        name: "Rupture",
                        description: "Causes an enemy unit's skin to rupture, dealing damage based on the distance it moves. The damage is dealt in percentage of max health."
                    }
                ]
            },
            Doombringer: {
                name: "Lucifer, the Doom",
                image: "images/Doombringer.jpeg",
                background: "Once a mighty general of the Burning Legion, Doom was cast out for his excessive cruelty. Now he brings annihilation to the battlefield, consuming enemies with infernal flames and silencing those who would oppose him.",
                skills: [
                    {
                        name: "Devour",
                        description: "Consumes an enemy or neutral creep, acquiring any special abilities that it possessed and gaining bonus gold."
                    },
                    {
                        name: "Scorched Earth",
                        description: "Covers the ground beneath Doom in flames, damaging enemies while healing him and increasing his movement speed."
                    },
                    {
                        name: "Infernal Blade",
                        description: "Doom's attacks burn his enemies, dealing bonus damage over time based on his target's max health."
                    },
                    {
                        name: "Doom",
                        description: "Inflicts a curse that prevents an enemy hero from casting spells or using items while dealing damage over time. The cursed hero is also muted."
                    }
                ]
            },
            Invoker: {
                name: "Carl, the Invoker",
                image: "images/INVOKER.jpeg",
                background: "A master of the arcane arts, Invoker commands a vast array of spells through his unique combination of quas, wex, and exort. His magical prowess is unmatched, allowing him to adapt to any situation on the battlefield.",
                skills: [
                    {
                        name: "Quas",
                        description: "Allows manipulation of ice elements. Each Quas instance provides increased health regeneration."
                    },
                    {
                        name: "Wex",
                        description: "Allows manipulation of storm elements. Each Wex instance provides increased attack speed and movement speed."
                    },
                    {
                        name: "Exort",
                        description: "Allows manipulation of fire elements. Each Exort instance provides increased attack damage."
                    },
                    {
                        name: "Invoke",
                        description: "Combines the properties of the elements currently being manipulated to create a new spell to use. The invoked spell depends on the combination of Quas, Wex, and Exort."
                    }
                ]
            },
            Naix: {
                name: "N'aix, the Lifestealer",
                image: "images/Na'ix.jpeg",
                background: "A creature consumed by an insatiable hunger, N'aix was once a prisoner of the Dark Rift. Now free, he feasts on the flesh of his enemies, regenerating from their pain and even infesting their bodies to turn them against their allies.",
                skills: [
                    {
                        name: "Rage",
                        description: "Lifestealer enrages, becoming immune to spells and gaining increased attack speed."
                    },
                    {
                        name: "Feast",
                        description: "Lifestealer's attacks deal damage as a percentage of the target's current health and heal him for the damage dealt."
                    },
                    {
                        name: "Ghoul Frenzy",
                        description: "Passively provides attack speed and movement speed. Attacks slow the target and reduce armor."
                    },
                    {
                        name: "Infest",
                        description: "Lifestealer infests the body of a target unit, lying dormant and undetectable inside. When he reveals himself, he deals damage to all nearby enemy units. Can target allied units to hitch a ride."
                    }
                ]
            },
            Terrorblade: {
                name: "Terrorblade",
                image: "images/Terrorblade.jpeg",
                background: "Once a noble demon warrior, Terrorblade rebelled against his kin and was banished to the underworld. Now he commands demonic forces, conjuring illusions of himself and even swapping life forces with his enemies to turn the tide of battle.",
                skills: [
                    {
                        name: "Reflection",
                        description: "Creates an invulnerable illusion of each enemy hero in the area. These illusions attack their original, but take increased damage."
                    },
                    {
                        name: "Conjure Image",
                        description: "Creates an illusion of Terrorblade that deals damage. The illusion takes extra damage."
                    },
                    {
                        name: "Metamorphosis",
                        description: "Terrorblade transforms into a powerful demon with a ranged attack. His illusions also gain the ranged attack in this form."
                    },
                    {
                        name: "Sunder",
                        description: "Severs the life from both Terrorblade and a target hero, exchanging a percentage of both units' current health. Some health points must remain."
                    }
                ]
            },
            Luna: {
                name: "Luna Moonfang",
                image: "images/Luna.jpeg",
                background: "A warrior priestess of the Moon Goddess, Luna rides into battle atop her majestic mount, calling down lunar beams to smite her enemies. Her glaives bounce between foes, cutting down entire armies with graceful precision.",
                skills: [
                    {
                        name: "Lucent Beam",
                        description: "Calls a beam of lunar energy down upon an enemy, stunning and damaging them."
                    },
                    {
                        name: "Moon Glaives",
                        description: "Allows Luna's glaives to bounce between enemy units, dealing reduced damage with each bounce."
                    },
                    {
                        name: "Lunar Blessing",
                        description: "Grants bonus damage to nearby allies, with Luna receiving a larger bonus. Also provides night vision."
                    },
                    {
                        name: "Eclipse",
                        description: "Calls multiple Lucent Beams down around Luna, prioritizing heroes. The number of beams is based on Lucent Beam's level."
                    }
                ]
            },
            Lina: {
                name: "Lina, the Slayer",
                image: "images/Lina.jpeg",
                background: "A fiery sorceress with a short temper, Lina wields flames with devastating precision. Her spells grow more powerful with each cast, culminating in a cataclysmic explosion of fire that can incinerate even the hardiest foes.",
                skills: [
                    {
                        name: "Dragon Slave",
                        description: "Releases a wave of fire that damages enemy units in a line."
                    },
                    {
                        name: "Light Strike Array",
                        description: "Summons a column of fire that stuns and damages enemies in a small area after a short delay."
                    },
                    {
                        name: "Fiery Soul",
                        description: "Grants bonus attack and movement speed for each spell cast. Stacks up to three times."
                    },
                    {
                        name: "Laguna Blade",
                        description: "Fires off a bolt of lightning that deals massive damage to a single unit. Pure damage that pierces magic immunity."
                    }
                ]
            },
            Rylai: {
                name: "Rylai, the Crystal Maiden",
                image: "images/Rylai.jpeg",
                background: "Born with a natural affinity for ice magic, Rylai supports her allies by freezing enemies in place and replenishing their mana. Her ultimate ability creates a devastating blizzard that slows and damages all enemies in a large area.",
                skills: [
                    {
                        name: "Crystal Nova",
                        description: "Creates a burst of damaging frost around Rylai, slowing movement and attack speed of enemies in the area."
                    },
                    {
                        name: "Frostbite",
                        description: "Encases an enemy unit in ice, preventing movement and attack, while dealing damage over time."
                    },
                    {
                        name: "Arcane Aura",
                        description: "Grants bonus mana regeneration to all allied units on the map."
                    },
                    {
                        name: "Freezing Field",
                        description: "Surrounds Rylai with a violent freezing storm that damages enemies and slows their attack and movement speed. Lasts for a duration based on channeling time."
                    }
                ]
            },
            Mirana: {
                name: "Mirana, the Princess of the Moon",
                image: "images/Mirana.jpeg",
                background: "A proud warrior of the Nightsilver Woods, Mirana rides her sacred tiger into battle, firing arrows of pure moonlight. Her ultimate ability cloaks her allies in moonlight, allowing them to move unseen until they attack or get too close to enemies.",
                skills: [
                    {
                        name: "Starstorm",
                        description: "Calls down a wave of meteors to damage nearby enemies. One random enemy unit in the area will be hit a second time for a portion of the damage."
                    },
                    {
                        name: "Sacred Arrow",
                        description: "Fires a long-range arrow with deadly precision, which stuns and damages the first enemy unit it strikes. The stun duration increases based on distance the arrow travels."
                    },
                    {
                        name: "Leap",
                        description: "Mirana leaps forward into battle, empowering allied units with a ferocious roar upon landing, granting them attack and movement speed."
                    },
                    {
                        name: "Moonlight Shadow",
                        description: "Turns Mirana and all allied heroes invisible. If invisibility is broken, it will restore after a short delay if the hero stays out of sight."
                    }
                ]
            },
            Mortred: {
                name: "Mortred, the Phantom Assassin",
                image: "images/Mortred.jpeg",
                background: "A deadly assassin who strikes from the shadows, Mortred's attacks have a chance to deal massive critical damage. She can blur reality to become harder to hit and even instantly appear behind her prey for the killing blow.",
                skills: [
                    {
                        name: "Stifling Dagger",
                        description: "Throws a dagger which deals a small amount of damage and interrupts the target. Applies Mortred's current attack effects."
                    },
                    {
                        name: "Phantom Strike",
                        description: "Mortred instantly moves to a target unit, friendly or enemy, and gains bonus attack speed while attacking that target."
                    },
                    {
                        name: "Blur",
                        description: "Passively increases Mortred's evasion. Can be activated to become invisible to the enemy team's minimap."
                    },
                    {
                        name: "Coup de Grâce",
                        description: "Mortred refines her combat abilities, gaining a chance to deal a critical strike. The critical strike is significantly more powerful than normal."
                    }
                ]
            }
        };

        // Function to show hero details
        function showHeroDetails(heroName) {
            const hero = heroes[heroName];
            if (!hero) return;
            
            const modal = document.getElementById('heroModal');
            const content = document.getElementById('heroContent');
            
            // Build the HTML content
            let html = `
                <h2>${hero.name}</h2>
                <div class="hero-details">
                    <div class="hero-image">
                        <img src="${hero.image}" alt="${hero.name}">
                    </div>
                    <div class="hero-info">
                        <h3>Background</h3>
                        <p>${hero.background}</p>
                        
                        <h3>Skills</h3>
                        <div class="skills-list">
            `;
            
            // Add each skill
            hero.skills.forEach(skill => {
                html += `
                    <div class="skill-item">
                        <h4>${skill.name}</h4>
                        <p>${skill.description}</p>
                    </div>
                `;
            });
            
            html += `
                        </div>
                    </div>
                </div>
            `;
            
            content.innerHTML = html;
            modal.style.display = "block";
        }
        
        // Function to close the modal
        function closeModal() {
            document.getElementById('heroModal').style.display = "none";
        }
        
        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('heroModal');
            if (event.target == modal) {
                closeModal();
            }
        }
