
export const SelectedGroup = [
 {
   id : `${crypto.randomUUID()}`,
   Tag : 'All chats',
   Svg : <svg className='Icon' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M12.5 11.5278C12.5 11.7962 12.2927 12.0139 12.037 12.0139C11.7813 12.0139 11.5741 11.7962 11.5741 11.5278C11.5741 11.2593 11.7813 11.0417 12.037 11.0417C12.2927 11.0417 12.5 11.2593 12.5 11.5278Z" fill="#868686"/>
   <path d="M16.6667 11.5278C16.6667 11.7962 16.4594 12.0139 16.2037 12.0139C15.948 12.0139 15.7407 11.7962 15.7407 11.5278C15.7407 11.2593 15.948 11.0417 16.2037 11.0417C16.4594 11.0417 16.6667 11.2593 16.6667 11.5278Z" fill="#868686"/>
   <path d="M8.33333 11.5278C8.33333 11.7962 8.12605 12.0139 7.87036 12.0139C7.61468 12.0139 7.4074 11.7962 7.4074 11.5278C7.4074 11.2593 7.61468 11.0417 7.87036 11.0417C8.12605 11.0417 8.33333 11.2593 8.33333 11.5278Z" fill="#868686"/>
   <path d="M9.48692 19.9737C8.00544 21.1403 4.78394 22.0602 3.7037 22.2222C4.01234 21.412 5.39478 19.3056 5.09259 17.3611L5.07648 17.2982C3.64542 15.7579 2.77777 13.7386 2.77777 11.5278C2.77777 6.69528 6.92328 2.77777 12.037 2.77777C17.1508 2.77777 21.2963 6.69528 21.2963 11.5278C21.2963 16.3603 17.1508 20.2778 12.037 20.2778M9.48692 19.9737C10.2996 20.172 11.1546 20.2778 12.037 20.2778M9.48692 19.9737L9.51891 19.9503C10.3195 20.1636 11.1642 20.2778 12.037 20.2778M8.33333 11.5278C8.33333 11.7962 8.12605 12.0139 7.87036 12.0139C7.61468 12.0139 7.4074 11.7962 7.4074 11.5278C7.4074 11.2593 7.61468 11.0417 7.87036 11.0417C8.12605 11.0417 8.33333 11.2593 8.33333 11.5278ZM12.5 11.5278C12.5 11.7962 12.2927 12.0139 12.037 12.0139C11.7813 12.0139 11.5741 11.7962 11.5741 11.5278C11.5741 11.2593 11.7813 11.0417 12.037 11.0417C12.2927 11.0417 12.5 11.2593 12.5 11.5278ZM16.6667 11.5278C16.6667 11.7962 16.4594 12.0139 16.2037 12.0139C15.948 12.0139 15.7407 11.7962 15.7407 11.5278C15.7407 11.2593 15.948 11.0417 16.2037 11.0417C16.4594 11.0417 16.6667 11.2593 16.6667 11.5278Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
 } , 
 {
   id : `${crypto.randomUUID()}`,
   Tag : 'Groupes',
   Svg : <svg className='Icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M4 16L15 16.001C16.0538 16.001 16.9181 16.8165 16.9945 17.8517L17 18.001V20.5C16.999 24.7 12.713 26 9.5 26C6.35126 26 2.17105 24.7515 2.0051 20.7485L2 20.5V18C2 16.9462 2.8164 16.0819 3.85081 16.0055L4 16ZM24 16L24.1492 16.0055C25.1319 16.0781 25.9178 16.8617 25.994 17.8434L26 18V20C25.999 23.759 22.57 25 20 25C18.942 25 17.741 24.785 16.691 24.275C17.009 23.897 17.278 23.477 17.488 23.007C18.4456 23.427 19.479 23.4925 19.9158 23.4993L20.2043 23.4963C21.2401 23.4607 24.3348 23.1117 24.4936 20.2326L24.5 20V18C24.5 17.7547 24.3222 17.5504 24.0896 17.5081L24 17.5L17.949 17.501C17.865 16.9996 17.6554 16.5434 17.3545 16.1605L17.22 16.001L24 16ZM4 17.5L3.89934 17.51C3.77496 17.5353 3.69 17.6028 3.646 17.646C3.6028 17.69 3.53528 17.7743 3.51 17.899L3.5 18V20.5C3.5 21.839 4.087 22.829 5.295 23.525C6.29136 24.1007 7.68435 24.4479 9.15851 24.4946L9.5 24.5L9.93487 24.4898C11.4555 24.4219 15.314 23.9332 15.4935 20.7323L15.5 20.499V18.001C15.5 17.7566 15.3222 17.5516 15.0896 17.5091L15 17.501L4 17.5ZM9.5 3C12.538 3 15 5.463 15 8.5C15 11.537 12.538 14 9.5 14C6.462 14 4 11.537 4 8.5C4 5.463 6.462 3 9.5 3ZM20.5 5C22.985 5 25 7.015 25 9.5C25 11.985 22.985 14 20.5 14C18.015 14 16 11.985 16 9.5C16 7.015 18.015 5 20.5 5ZM9.5 4.5C7.294 4.5 5.5 6.294 5.5 8.5C5.5 10.706 7.294 12.5 9.5 12.5C11.706 12.5 13.5 10.706 13.5 8.5C13.5 6.294 11.706 4.5 9.5 4.5ZM20.5 6.5C18.846 6.5 17.5 7.846 17.5 9.5C17.5 11.154 18.846 12.5 20.5 12.5C22.154 12.5 23.5 11.154 23.5 9.5C23.5 7.846 22.154 6.5 20.5 6.5Z" fill="white" strokeWidth="1.5" fillOpacity="0.4"/>
  </svg>
 } , 
 {
   id : `${crypto.randomUUID()}`,
   Tag : 'Personal',
   Svg : <svg className='Icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M21 16C22.6569 16 24 17.3431 24 19V19.7146C24 23.2924 19.7895 26 14 26C8.21053 26 4 23.4333 4 19.7146V19C4 17.3431 5.34315 16 7 16H21ZM21 17.5H7C6.2203 17.5 5.57955 18.0949 5.50687 18.8555L5.5 19V19.7146C5.5 22.389 8.88879 24.5 14 24.5C18.926 24.5 22.3548 22.3951 22.4955 19.876L22.5 19.7146V19C22.5 18.2203 21.9051 17.5796 21.1445 17.5069L21 17.5ZM14 2C17.3137 2 20 4.68629 20 8C20 11.3137 17.3137 14 14 14C10.6863 14 8 11.3137 8 8C8 4.68629 10.6863 2 14 2ZM14 3.5C11.5147 3.5 9.5 5.51472 9.5 8C9.5 10.4853 11.5147 12.5 14 12.5C16.4853 12.5 18.5 10.4853 18.5 8C18.5 5.51472 16.4853 3.5 14 3.5Z" fill="white" strokeWidth="1.5" fillOpacity="0.4"/>
  </svg>
 } , 
 {
   id : `${crypto.randomUUID()}`,
   Tag : 'AskAI',
   Svg : <img src="https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png" 
   className='ChatGPTPic'
   alt="ChatGPTPic" />
 }
];