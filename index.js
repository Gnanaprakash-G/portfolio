function switchtab(tab)
{
  let links=document.querySelectorAll('.about-link');
  links.forEach((link)=>
  {
    link.classList.remove('active-link');
  })
  const skills=document.querySelector('.skills');
  const skilllink=document.querySelector('.skill-link');
  const education=document.querySelector(".education");
  const educationlink=document.querySelector(".education-link");
  if (tab=='skills')
  {
    skills.classList.add('active');
    skilllink.classList.add('active-link');
    education.classList.remove('active');
    educationlink.classList.remove('active-link');
  }
  else
  {
    skills.classList.remove('active');
    skilllink.classList.remove('active-link');
    education.classList.add('active');
    educationlink.classList.add('active-link');
  }
}

function showsidebar(value)
{
  const menu=document.querySelector('.menu');
  menu.style.right=`${value}`;
}