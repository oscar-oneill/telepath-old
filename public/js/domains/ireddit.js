export default async function ireddit(a,i,n,s,e,t,d,r,c,l){let o=document.querySelector(".objects");if("i.redd.it"==a&&n.includes("gif")){!async function(){const n=await fetch(`https://api.reddit.com/r/${l}/about`),m=await n.json();let u=m.data.icon_img?m.data.icon_img:m.data.community_icon?m.data.community_icon:m.data.header_img?m.data.header_img:"https://www.interactive.org/images/games_developers/no_image_available_sm.jpg",p=r||"",v={image:c.url,title:s,sub:i,ups:e,author:t,domain:a,date:d,flair:p,icon:u,link:"https://www.reddit.com"+c.permalink};o.innerHTML+=function(a){return`\n                <div class="container">\n                    <div class="identifier">\n                        <div class="subreddit_img">\n                            <a href="/subreddit/${l}">\n                                <img class="subreddit_icon" src="${a.icon}" alt="subreddit icon">\n                            </a>\n                        </div>\n                        <div class="nameplate">\n                            <div class="primary_data"><a href="/subreddit/${l}">${a.sub}</a> &nbsp; &#183; &nbsp; <a href="/user/${a.author}"><span class="user">u/${a.author}</span></a> &#183; <span class="domain">${a.domain}</span></div>\n                            <div class="secondary_data">\n                                <span class="post_title">${a.title}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="media_box">\n                        <img src="${a.image}" loading="lazy"/>\n                    </div>\n                    <div class="activity">\n                        <i class="fas fa-heart like_btn"></i><span class="likes">${a.ups} Likes</span> <br>\n                        <div class="date_box">\n                            <span class="date">${a.date}</span> \n                            &#183; \n                            <a class="link" href="${a.link}" target="_blank" rel="noopener noreferrer nofollow">Permalink</a>\n                        </div>\n                    </div>\n                </div> \n\t\t        `}(v)}()}}ireddit();