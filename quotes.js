const localQuotes = [
	{
		text: 'A little knowledge that acts is worth infinitely more than much knowledge that is idle.',
		author: 'Kahlil Gibran',
	},

	{
		text: 'If you get up one more time than you fall, you will make it through.',
		author: null,
	},

	{
		text: 'The doors we open and close each day decide the lives we live.',
		author: 'Flora Whittemore',
	},

	{
		text: 'The worst bankrupt in the world is the person who has lost his enthusiasm.',
		author: 'H. W. Arnold',
	},

	{
		text: 'Happiness comes when your work and words are of benefit to yourself and others.',
		author: 'Buddha',
	},

	{
		text: "Don't focus on making the right decision, focus on making the decision the right one.",
		author: null,
	},

	{
		text: 'Everything is perfect in the universe even your desire to improve it.',
		author: 'Wayne Dyer',
	},

	{
		text: 'The universe is full of magical things, patiently waiting for our wits to grow sharper.',
		author: 'Eden Phillpotts',
	},

	{
		text: 'Just as a candle cannot burn without fire, men cannot live without a spiritual life.',
		author: 'Buddha',
	},

	{
		text: 'A thing long expected takes the form of the unexpected when at last it comes.',
		author: 'Mark Twain',
	},

	{
		text: 'Action may not always bring happiness; but there is no happiness without action.',
		author: 'Benjamin Disraeli',
	},

	{
		text: "I don't believe in failure. It is not failure if you enjoyed the process.",
		author: 'Oprah Winfrey',
	},

	{
		text: 'What you do not want done to yourself, do not do to others.',
		author: 'Confucius',
	},
	{
		text: 'Short words are best and the old words when short are best of all.',
		author: 'Winston Churchill',
	},

	{
		text: 'If you light a lamp for somebody, it will also brighten your path.',
		author: 'Buddha',
	},

	{
		text: 'I have done my best: that is about all the philosophy of living one needs.',
		author: 'Lin-yutang',
	},

	{
		text: 'Through perseverance many people win success out of what seemed destined to be certain failure.',
		author: 'Benjamin Disraeli',
	},

	{
		text: 'Give thanks for the rain of life that propels us to reach new horizons.',
		author: 'Byron Pulsifer',
	},

	{
		text: 'Love is just a word until someone comes along and gives it meaning.',
		author: null,
	},

	{
		text: 'We all have problems. The way we solve them is what makes us different.',
		author: null,
	},

	{
		text: 'The secret to a rich life is to have more beginnings than endings.',
		author: 'Dave Weinbaum',
	},

	{
		text: 'It is only when the mind and character slumber that the dress can be seen.',
		author: 'Ralph Waldo Emerson',
	},

	{
		text: "If you don't like something, change it. If you can't change it, change your attitude.",
		author: 'Maya Angelou',
	},
	{
		text: 'Reviewing what you have learned and learning anew, you are fit to be a teacher.',
		author: 'Confucius',
	},

	{
		text: 'The world is a book, and those who do not travel read only a page.',
		author: 'Augustinus Sanctus',
	},

	{
		text: 'So long as a person is capable of self-renewal they are a living being.',
		author: 'Henri-Frederic Amiel',
	},

	{
		text: "I'm not afraid of storms, for I'm learning how to sail my ship.",
		author: 'Louisa Alcott',
	},

	{
		text: 'Think for yourselves and let others enjoy the privilege to do so too.',
		author: 'Voltaire',
	},

	{
		text: 'How we spend our days is, of course, how we spend our lives.',
		author: 'Annie Dillard',
	},

	{
		text: 'It has never been my object to record my dreams, just to realize them.',
		author: 'Man Ray',
	},

	{
		text: 'The most complicated achievements of thought are possible without the assistance of consciousness.',
		author: 'Sigmund Freud',
	},

	{
		text: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
		author: 'Wayne Dyer',
	},

	{
		text: 'Most great people have attained their greatest success just one step beyond their greatest failure.',
		author: 'Napoleon Hill',
	},
	{
		text: "If you think you can, you can. And if you think you can't, you're right.",
		author: 'Henry Ford',
	},

	{
		text: 'Better to have loved and lost, than to have never loved at all.',
		author: 'St. Augustine',
	},

	{
		text: 'Everyone thinks of changing the world, but no one thinks of changing himself.',
		author: 'Leo Tolstoy',
	},

	{
		text: 'The best way to pay for a lovely moment is to enjoy it.',
		author: 'Richard Bach',
	},

	{
		text: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
		author: 'Winston Churchill',
	},

	{
		text: 'Slow down and everything you are chasing will come around and catch you.',
		author: 'John De Paola',
	},

	{
		text: 'Your worst enemy cannot harm you as much as your own unguarded thoughts.',
		author: 'Buddha',
	},

	{
		text: 'I always wanted to be somebody, but I should have been more specific.',
		author: 'Lily Tomlin',
	},

	{
		text: 'Yeah we all shine on, like the moon, and the stars, and the sun.',
		author: 'John Lennon',
	},

	{
		text: 'Knowledge is a process of piling up facts; wisdom lies in their simplification.',
		author: 'Martin Fischer',
	},
	{
		text: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
		author: 'Albert Einstein',
	},

	{
		text: 'We should all be thankful for those people who rekindle the inner spirit.',
		author: 'Albert Schweitzer',
	},

	{
		text: 'Opportunity is missed by most because it is dressed in overalls and looks like work.',
		author: 'Thomas Edison',
	},

	{
		text: 'Feeling and longing are the motive forces behind all human endeavor and human creations.',
		author: 'Albert Einstein',
	},

	{
		text: 'In the end we retain from our studies only that which we practically apply.',
		author: 'Johann Wolfgang von Goethe',
	},

	{
		text: 'If you correct your mind, the rest of your life will fall into place.',
		author: 'Lao Tzu',
	},

	{
		text: 'The world makes way for the man who knows where he is going.',
		author: 'Ralph Emerson',
	},

	{
		text: 'When your desires are strong enough you will appear to possess superhuman powers to achieve.',
		author: 'Napoleon Hill',
	},

	{
		text: 'Patience and perseverance have a magical effect be…hich difficulties disappear and obstacles vanish.',
		author: 'John Adams',
	},

	{
		text: 'I cannot make my days longer so I strive to make them better.',
		author: 'Henry David Thoreau',
	},
	{
		text: 'Tension is who you think you should be. Relaxation is who you are.',
		author: 'Chinese proverb',
	},

	{
		text: 'Never bend your head. Always hold it high. Look the world right in the eye.',
		author: 'Helen Keller',
	},

	{
		text: 'One who gains strength by overcoming obstacles pos…s the only strength which can overcome adversity.',
		author: 'Albert Schweitzer',
	},

	{
		text: 'We cannot do everything at once, but we can do something at once.',
		author: 'Calvin Coolidge',
	},

	{
		text: 'You have to do your own growing no matter how tall your grandfather was.',
		author: 'Abraham Lincoln',
	},

	{
		text: 'Invent your world. Surround yourself with people, color, sounds, and work that nourish you.',
		author: null,
	},

	{
		text: 'It is fatal to enter any war without the will to win it.',
		author: 'General Douglas MacArthur',
	},

	{
		text: 'Be what you are. This is the first step toward becoming better than you are.',
		author: 'Julius Charles Hare',
	},

	{
		text: "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
		author: 'Buckminster Fuller',
	},

	{
		text: 'Love and compassion open our own inner life, reducing stress, distrust and loneliness.',
		author: 'Dalai Lama',
	},
	{
		text: 'Ideals are an imaginative understanding of that which is desirable in that which is possible.',
		author: 'Walter Lippmann',
	},

	{
		text: 'The superior man is satisfied and composed; the mean man is always full of distress.',
		author: 'Confucius',
	},

	{
		text: "If you spend too much time thinking about a thing, you'll never get it done.",
		author: 'Bruce Lee',
	},

	{
		text: 'The way is not in the sky. The way is in the heart.',
		author: 'Buddha',
	},

	{
		text: 'Most people are about as happy as they make up their minds to be',
		author: 'Abraham Lincoln',
	},

	{
		text: 'Three things cannot be long hidden: the sun, the moon, and the truth.',
		author: 'Buddha',
	},

	{
		text: 'More often than not, anger is actually an indication of weakness rather than of strength.',
		author: 'Dalai Lama',
	},

	{
		text: 'Before you put on a frown, make absolutely sure there are no smiles available.',
		author: 'Jim Beggs',
	},

	{
		text: 'A man of ability and the desire to accomplish something can do anything.',
		author: 'Donald Kircher',
	},

	{
		text: 'You, yourself, as much as anybody in the entire universe, deserve your love and affection.',
		author: 'Buddha',
	},
	{
		text: 'It is not uncommon for people to spend their whole life waiting to start living.',
		author: 'Eckhart Tolle',
	},

	{
		text: "Don't be afraid to go out on a limb. That's where the fruit is.",
		author: 'H. Jackson Browne',
	},

	{
		text: 'Wicked people are always surprised to find ability in those that are good.',
		author: 'Marquis Vauvenargues',
	},

	{
		text: 'Life is so constructed that an event does not, cannot, will not, match the expectation.',
		author: 'Charlotte Bronte',
	},

	{
		text: 'If you change the way you look at things, the things you look at change.',
		author: 'Wayne Dyer',
	},

	{
		text: 'No man can succeed in a line of endeavor which he does not like.',
		author: 'Napoleon Hill',
	},

	{
		text: 'You will not be punished for your anger, you will be punished by your anger.',
		author: 'Buddha',
	},

	{
		text: "Don't judge each day by the harvest you reap but by the seeds you plant.",
		author: 'Robert Stevenson',
	},

	{
		text: 'They say that time changes things, but you actually have to change them yourself.',
		author: 'Andy Warhol',
	},

	{
		text: 'Never apologize for showing feelings. When you do so, you apologize for the truth.',
		author: 'Benjamin Disraeli',
	},
	{
		text: 'The truth you believe and cling to makes you unavailable to hear anything new.',
		author: 'Pema Chodron',
	},

	{
		text: 'Adversity has the effect of eliciting talents, whi…prosperous circumstances would have lain dormant.',
		author: 'Horace',
	},

	{
		text: "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
		author: 'Morris West',
	},

	{
		text: 'The only limit to our realization of tomorrow will be our doubts of today.',
		author: 'Franklin Roosevelt',
	},

	{
		text: 'Every action of our lives touches on some chord that will vibrate in eternity.',
		author: 'Edwin Chapin',
	},

	{
		text: "Shoot for the moon. Even if you miss, you'll land among the stars.",
		author: 'Les Brown',
	},

	{
		text: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},

	{
		text: "Every day may not be good, but there's something good in every day.",
		author: null,
	},

	{
		text: 'Most folks are about as happy as they make up their minds to be.',
		author: 'Abraham Lincoln',
	},

	{
		text: 'If you would take, you must first give, this is the beginning of intelligence.',
		author: 'Lao Tzu',
	},
	{
		text: "Some people think it's holding that makes one strong sometimes it's letting go.",
		author: null,
	},

	{
		text: 'It is on our failures that we base a new and different and better success.',
		author: 'Havelock Ellis',
	},

	{
		text: 'Quality is never an accident; it is always the result of intelligent effort.',
		author: 'John Ruskin',
	},

	{
		text: 'To study and not think is a waste. To think and not study is dangerous.',
		author: 'Confucius',
	},

	{
		text: 'Life is a succession of lessons, which must be lived to be understood.',
		author: 'Ralph Emerson',
	},
];
