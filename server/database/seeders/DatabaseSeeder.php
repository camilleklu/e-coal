<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application"s database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     "name" => "Test User",
        //     "email" => "test@example.com",
        // ]);

        // Premier article
        $article = Article::create([
            "title" => "<h2>Stray Kids unveils 'SKZOO x TAMAGOTCHI' Collaboration Merchandise</h2>",
            "content" => "<p>Stray Kids, the globally popular K-pop group, has once again captured the attention of fans with an exciting new collaboration. This time, the group has teamed up with Tamagotchi, the iconic virtual pet brand, to release a limited edition line of merchandise.</p> <p>The collaboration, announced on March 4th, brings together Stray Kids' beloved SKZOO characters and the nostalgic charm of Tamagotchi’s digital pet universe.
</p><p>The <strong>'SKZOO x TAMAGOTCHI' </strong>collection features adorable merchandise that merges the playful world of Stray Kids’ cartoon characters and the interactive nature of the Tamagotchi digital pets. The partnership highlights Stray Kids’ creative SKZOO characters, each representing a member of the group, and pairs them with the Tamagotchi brand’s signature cute aesthetic.</p><p>Tamagotchi has been a part of pop culture for decades, and this collaboration with Stray Kids allows fans to relive the charm of the classic virtual pet while enjoying a modern twist. The ''SKZOO x Tamagotchi' products are designed not only for fans of Stray Kids but also for those who grew up with the Tamagotchi craze in the 90s and early 2000s.</p><p>The 'SKZOO x TAMAGOTCHI' merchandise will be available in limited quantities, making it a must-have for collectors. The items will be released through Stray Kids' official fan shop and other selected retailers.</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/040741/1741092089-stray-kids-skzoo-x-tamagotchi-collaboration-merchandise-v0-5fh377e5xnme1.jpg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/040741/1741092089-stray-kids-skzoo-x-tamagotchi-collaboration-merchandise-v0-5fh377e5xnme1.jpg",
            "author" => "Demian09",
            "date" => now(),
            "extract" => "<p>Stray Kids, the globally popular K-pop group, has once again captured the attention of fans with an exciting new collaboration. </p>"

        ]);

        $tag1 = Tag::create(["name" => "ecoal25"]);
        $tag2 = Tag::create(["name" => "react"]);
        $article->tags()->attach([$tag1->id, $tag2->id]);

        // Deuxième article
        $article = Article::create([
            "title" => "<h2>SEVENTEEN's Wonwoo to enlist in April, following Jeonghan</h2>",
            "content" => "<p>SEVENTEEN’s Wonwoo to begin military service as second member of the group.</p><p>On March 5th KST, Pledis Entertainment, the agency of SEVENTEEN, announced on fan community platform Weverse that Wonwoo will begin his mandatory military service on April 3rd KST.</p><p>As a result, Wonwoo will be absent from all schedules following his enlistment, including the ‘Tecate Pal Norte 2025’ festival and the group’s upcoming Japan fan meeting. However, he will still participate in the ‘Carat Land’ concerts on March 20th and 21st and will continue to connect with fans through pre-recorded content.</p><p>The agency further stated, <em>'There will be no official events on the day of his enlistment. We kindly ask fans to refrain from visiting the alternative service site. Please leave your messages for Wonwoo on Weverse. We appreciate your continued love and support so that Wonwoo can fulfill his military duty diligently and return in good health.'</em></p><p>With this, Wonwoo becomes the second member of SEVENTEEN to enlist, following Jeonghan, who entered training on September 26th last year and is currently serving as a public service worker.</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/042139/1741142344-img-9618.jpeg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/042139/1741142344-img-9618.jpeg",
            "author" => "Minsoo-Kim",
            "date" => now(),
            "extract" => "<p>SEVENTEEN’s Wonwoo to begin military service as second member of the group. On March 5th KST, Pledis Entertainment, the agency of SEVENTEEN, announced on fan community platform Weverse</p>"

        ]);

        $tag3 = Tag::create(["name" => "newtag"]);
        $article->tags()->attach([$tag3->id, $tag1->id]);

        // Troisième article
        $article = Article::create([
            "title" => "<h2>'Second generation legend,' Fans impressed with G-Dragon's first-week sales for his latest album 'Übermensch'</h2>",
            "content" => "<p>G-Dragon has once again proven his dominance in the music industry with the release of his latest album 'Übermensch.'</p><p>According to the Hanteo Chart, 'Übermensch' sold a staggering 639,176 copies on its first day alone. By March 4, the album had surpassed 823,000 copies, marking G-Dragon’s highest first-week sales for a solo release. Fans were particularly amazed as this far exceeded his previous best-selling album 'Heartbreaker,' which sold around 300,000 copies.
</p><p>Not only did Übermensch achieve massive physical sales, but it also dominated digital charts, reaching No. 1 on iTunes Top Albums in at least 28 regions.</p>Korean netizens were impressed with the album’s global success but were not surprised as G-Dragon's star power continued even after years of hiatus from the music scene.They commented:</p><p><em>'GD is GD.'</em></p><p><em>'There wasn't a first-week sales record a long time ago.'</em></p><p><em>'The album-buying culture has really become distorted. Seeing this makes it feel even stranger.'</em></p><p><em>'But this is impressive. He's a 2nd generation idol.'</em></p><p><em>'Second generation legend.'</em></p><p><em>'Please release albums more frequently.'</em></p><p><em>'Wow, he broke his personal record.'</em></p><p><em>'Looking at his seven-year hiatus, this is impressive.'</em></p><p><em>'GD is just a legend.'</em></p><p><em>'He sold more than 10 times his prime time.'</em></p><p><em>'Wow, he didn't even hold a fan sign event and sold this many.'</em></p><p><em>'Congrats GD!' </em></p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/041546/1741121184-header-photo.jpg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/041546/1741121184-header-photo.jpg",
            "author" => "Sophie-Ha",
            "date" => now(),
            "extract" => "<p>G-Dragon has once again proven his dominance in the music industry with the release of his latest album 'Übermensch.'</p>"

        ]);
        // Quatrième article
        $article = Article::create([
            "title" => "<h2>NMIXX introduces their new ship project: MMU for their upcoming comeback with 'Fe3O4: FORWARD'</h2>",
            "content" => "<p>NMIXX rolled out a stunning visual film teaser for their upcoming mini-album 'Fe3O4: FORWARD,' introducing a new project.</p><p>On March 5 at midnight KST, NMIXX unveiled a new teaser titled 'Our new ship project: MMU.' The teaser shows the production of a grand spaceship that gets docked at the station for take-off.</p><p>Meanwhile, NMIXX's upcoming 4th mini-album 'Fe3O4: FORWARD' features six tracks, including the title song 'KNOW ABOUT ME,' as well as 'High Horse,' 'Slingshot (<★),' 'Golden Recipe,' 'Papillon,' and 'Ocean.'</p><p>NMIXX will return on March 17 at 6 PM KST with 'Fe3O4: FORWARD.'</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/011106/1740845180-gkuls5nbwaakr04.jpg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/011106/1740845180-gkuls5nbwaakr04.jpg",
            "author" => "Sophie-Ha",
            "date" => now(),
            "extract" => "<p>NMIXX rolled out a stunning visual film teaser for their upcoming mini-album 'Fe3O4: FORWARD,' introducing a new project.</p>"

        ]);
        // Cinquième article
        $article = Article::create([
            "title" => "<h2>Lisa makes history at the Oscars, wows in Korean designer's couture</h2>",
            "content" => "<p>On March 2, 2025, BLACKPINK's Lisa made history as the first K-pop artist to perform at the prestigious 'Academy Awards,' held at the Dolby Theatre in Hollywood, Los Angeles. </p><p> She took the stage during the tribute performance for the iconic 007 movie series, delivering a powerful rendition of 'Live and Let Die,' the theme song from Live and Let Die. Her brief yet impactful performance garnered a standing ovation, solidifying her place in Oscars history.</p></p>After the Oscars ceremony, Lisa attended the star-studded after party, showcasing her impeccable fashion sense. She wore a unique corset leather dress by Miss Sohee, a haute couture brand founded by Korean designer Park Sohee. The dress was from the brand's debut collection and added an exclusive touch to her already stunning appearance.</p><p>Fashion magazine Harper's Bazaar highlighted Lisa as one of the 'Best Dressed' alongside other celebrities like Kendall Jenner, Selena Gomez, Sinhaa Eribo, and Monica Babaro.</p><p>Lisa’s appearance at the Oscars comes shortly after the release of her latest album, 'Alter Ego,' in February 2025. The album features collaborations with global artists like Doja Cat, Megan Thee Stallion, and Future, among others. This April, she will also take the stage for her first solo performance at Coachella, marking another milestone in her career.</p><p>Additionally, Lisa's group, BLACKPINK, is gearing up for their massive world tour, with concerts planned in major cities around the world. Starting in July, the tour will take them to locations like the Goyang Sports Complex in Korea, Los Angeles, Chicago, Toronto, New York, Paris, Milan, Barcelona, London, and Tokyo. YG Entertainment teased that the upcoming tour will be of an even grander scale than their <strong>'BORN PINK'</strong> tour, promising fans an unforgettable experience.</p><p>Lisa's appearance at the Oscars not only exemplifies her rising global influence but also solidifies her role as a fashion icon, both on and off the stage.</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/040714/1741090458-2025-03-04-12.png",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/040714/1741090458-2025-03-04-12.png",
            "author" => "Demian09",
            "date" => now(),
            "extract" => "<p>On March 2, 2025, BLACKPINK's Lisa made history as the first K-pop artist to perform at the prestigious 'Academy Awards,' held at the Dolby Theatre in Hollywood, Los Angeles.</p>"

        ]);
        // Sixième article
        $article = Article::create([
            "title" => "<h2>SM Entertainment's former NCT member Taeil, expelled last year, faces trial for special aggravated rape charges</h2>",
            "content" => "<p>Former NCT member Taeil (real name Moon Taeil), who was previously terminated by SM Entertainment, is now facing trial for special aggravated rape charges. He is accused of sexually assaulting a woman with acquaintances. </p><p>According to legal sources on March 4th, the Seoul Central District Prosecutor's Office's Women and Children's Crime Investigation Division (Chief Kim Ji Hye) indicted Taeil and two accomplices on charges of special aggravated rape under the Sexual Violence Punishment Act on February 28th.</p><p>The trio is accused of raping a woman who was intoxicated in June of last year. Although a detention warrant was requested for Taeil, it was rejected on the grounds that their acknowledgment of the crime made detention unnecessary.</p><p>There were also suspicions that they had used a weapon during the crime after the special aggravated rape charge was reported, but these allegations were confirmed to be false. The special aggravated rape charge applies when a weapon is involved or when two or more individuals assault a victim who is in a state of diminished mental capacity or unable to resist. It has been clarified that they were not in possession of any weapon during the incident.</p><p>Full Official Statement from SM Entertainment:</p><p><em>‘This is SM Entertainment.</em></p><p><em>We inform you that the exclusive contract between our company and Taeil has been terminated as of October 15, 2024.</em></p><p><em>Taeil is currently under prosecution investigation for a criminal case. This constitutes grounds for contract termination and makes it impossible to maintain trust in him as an artist. Therefore, we have decided to terminate the exclusive contract by mutual agreement.</em></p><p><em>Once again, we sincerely apologize for any concerns caused by our former artist Taeil.’</em></p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/040316/1741076172-2025-03-04-8.png",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/040316/1741076172-2025-03-04-8.png",
            "author" => "Demian09",
            "date" => now(),
            "extract" => "<p>Former NCT member Taeil (real name Moon Taeil), who was previously terminated by SM Entertainment, is now facing trial for special aggravated rape charges. He is accused of sexually assaulting a woman with acquaintances. </p>"

        ]);
        // Séptième article
        $article = Article::create([

            "title" => "<h2>LE SSERAFIM’s new song ‘Ash’ disqualified by music review board for controversial lyrics</h2>",
            "content" => "<p>LE SSERAFIM has had their new song ‘Ash’ disqualified by KBS’s music deliberation board.</p><p>According to an IZE report on the 5th, ‘Ash’ from LE SSERAFIM’s upcoming 5th mini-album ‘HOT', set for release on the 14th, was included in the list of songs deemed ineligible for broadcast by KBS’s music deliberation results announced that day.</p><p>'Ash' is one of three tracks co-written and composed by Huh Yunjin, along with the title song 'HOT' and 'So Cynical (Badum)'. She is credited for a total of three songs on the album.</p><p>KBS ruled 'Ash' ineligible for broadcast due to lyrics that glorify physical and mental abuse, including self-harm, or contain disturbing and cruel content. However, songs deemed ineligible can be resubmitted for review after modifying or removing the problematic lyrics. Only approved songs can be aired on KBS programs, including TV and radio.</p><p>Aside from 'Ash', other songs from LE SSERAFIM’s mini-album 'HOT'—including the title track 'HOT', 'Born Fire', 'Come Over', and 'So Cynical (Badum)'—were also deemed ineligible for broadcast.</p><p>Meanwhile, in addition to 'Ash', A.M.F’s 'DAMAGE (English ver.)' and 'Damage' were also ruled ineligible by KBS’s deliberation board.</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/050320/1741162854-0000010329-001-20250305123511443.jpg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/050320/1741162854-0000010329-001-20250305123511443.jpg",
            "author" => "Alec06",
            "date" => now(),
            "extract" => "<p>LE SSERAFIM has had their new song “Ash” disqualified by KBS’s music deliberation board.</p>"

        ]);
        // Huitième article
        $article = Article::create([

            "title" => "<h2>STAYC teases striking visuals for ‘S’, marking a dramatic shift</h2>",
            "content" => "<p>STAYC is heightening anticipation for their comeback by unveiling the ‘STAYC 2025’ video, showcasing a striking new look.</p><p>On March 2nd KST, STAYC (Sumin, Sieun, Isa, Seeun, Yoon, and J) released the teaser video via their official social media channels ahead of their 5th single album ‘S’, set for release later this month.</p><p>The black-and-white video exudes an artistic, cinematic feel, blending STAYC’s signature presence with a fresh and sophisticated atmosphere. The members stun with dramatically different hairstyles and bold makeup, signaling a radical transformation from their previous concepts.</p><p>STAYC captivates with provocative yet dreamy gazes, striking poses that amplify their individual charms. The visual effects, including scattered wings, water droplets, and fantasy-inspired props, further enhance the intrigue surrounding their new concept.</p><p>‘S’ marks STAYC’s return after five months since their digital single ‘…l (Dot Dot Dot)’ in October last year. While their past releases were loved for their bright and playful energy, this comeback introduces a bold, high-fashion aesthetic, eliciting excitement from global fans. The continued release of monochrome teaser content hints at a shift in the group’s artistic direction, fueling curiosity about their upcoming sound and visuals.</p><p>The album’s title track, ‘BEBE’, is expected to showcase not only a sonic and visual transformation but also STAYC’s expanding musical spectrum, promising another powerful impact.</p><p>Meanwhile, STAYC’s 5th single album ‘S’ will be released on March 18th at 6 PM KST across various online music platforms. Following their comeback, the group will embark on their 2025 STAYC Tour ‘STAY TUNED’, kicking off with concerts at Olympic Hall in Seoul on April 12th and 13th.</p>",

            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/032052/1741053158-img-9557.jpeg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/032052/1741053158-img-9557.jpeg",
            "author" => "Minsoo-Kim",
            "date" => now(),
            "extract" => "<p>STAYC is heightening anticipation for their comeback by unveiling the ‘STAYC 2025’ video, showcasing a striking new look.</p>"

        ]);

        // Neuvième article
        $article = Article::create([
            "title" => "<h2>8TURN unleashes dynamic ‘LEGGO’ MV</h2>",
            "content" => "<p>On March 4, 2025, 8TURN officially released their highly anticipated first single album ‘LEGGO,’ along with the music video for the title track ‘LEGGO.’ The album features a blend of pop, hip-hop, and high-energy beats, with the title track focusing on themes of freedom, self-expression, and confidence.</p><p>The music video showcases vibrant visuals and dynamic choreography, emphasizing the group's youthful and rebellious image. With this release, 8TURN aims to establish themselves as a rising force in the global K-pop industry, drawing attention to their distinct sound and bold style.</p><p>Since their debut, 8TURN has captured the attention of fans around the world, and with ‘LEGGO,’ they’re only setting the stage for bigger things. The album is already causing a stir, and fans can’t stop talking about the mysterious question posed in the song: 𝓦𝓱𝓸’𝓼 𝓣𝓱𝓪𝓽 𝓕𝓪𝓷𝓬𝔂 𝓚𝓲𝓭? It’s got everyone guessing and wondering what’s coming next from the group.</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2024/11/content/291142/1732898553-20241129-8turn.jpeg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2024/11/content/291142/1732898553-20241129-8turn.jpeg",
            "author" => "Demian09",
            "date" => now(),
            "extract" => "<p>On March 4, 2025, 8TURN officially released their highly anticipated first single album ‘LEGGO,’ along with the music video for the title track ‘LEGGO.’</p>"
        ]);

        // Dixième article
        $article = Article::create([
            "title" => "<h2>NJZ drops new content teasing a Drum N Bass type beat with new hints</h2>",
            "content" => "<p>NJZ continues to roll out new teaser content for their possible new song release.</p><p>There has not been an official announcement, but fans have been anticipating that the group would drop new music in time for their Complex Con in Hong Kong performance because NJZ unveiled new concept photos.</p><p>Following the group's rebranding announcement, NJZ has been unveiling various teaser content, further hinting at new music drops. Then, on March 4 at midnight KST, the group released a teaser clip with a new Drum N Bass type beat, possibly part of their new track.</p><p>Not only that, NJZ dropped new hints through social media. In the teasers released on the group's official TikTok account, the videos were released with the caption ‘Pit Stop.’ Fans are speculating that NJZ would make a comeback with a car racing concept since a pit stop is a servicing and refueling station during a race.</p><p>They commented, '<em>I'm so excited,</em>' '<em>So crazy,</em>' '<em>Where are they getting all these ideas?</em>' '<em>Something big is coming!</em>' '<em>I can't wait,</em>' '<em>My heart is so fluttering,</em>' '<em>Are they going to be race car drivers?</em>' and '<em>It's coming soon?! I can't wait!</em>'</p><p>There has not been an official confirmation of any sort, but NJZ continues to roll out teasers and hints. So stay tuned for more information on NJZ's comeback!</p>",
            "thumbnailURL" => "https://www.allkpop.com/upload/2025/03/content/031119/1741018755-header-photo.jpg",
            "mediaType" => "image",
            "mediaURL" => "https://www.allkpop.com/upload/2025/03/content/031119/1741018755-header-photo.jpg",
            "author" => "Sophie-Ha",
            "date" => now(),
            "extract" => "<p>NJZ continues to roll out new teaser content for their possible new song release. There has not been an official announcement, but fans</p>"
        ]);



        Article::updateLeadStories();

    }
}
