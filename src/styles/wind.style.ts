import { createGlobalStyle } from 'styled-components';

export const WindStyle = createGlobalStyle`
@font-face {
  font-family: 'weathericons';
  src: url('./font/weathericons-regular-webfont.eot');
  src: url('./font/weathericons-regular-webfont.eot?#iefix') format('embedded-opentype'), url('./font/weathericons-regular-webfont.woff2') format('woff2'), url('./font/weathericons-regular-webfont.woff') format('woff'), url('./font/weathericons-regular-webfont.ttf') format('truetype'), url('./font/weathericons-regular-webfont.svg#weather_iconsregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
.wi {
  display: inline-block;
  font-family: 'weathericons';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wi-fw {
  text-align: center;
  width: 1.4em;
}
.wi-rotate-90 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.wi-rotate-180 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-rotate-270 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.wi-flip-horizontal {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
  -webkit-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.wi-flip-vertical {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);
  -webkit-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
.wi-wind:before {
  content: "\f0b1";
}
.wi-wind.towards-0-deg {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
.wi-wind.towards-1-deg {
  -webkit-transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  -ms-transform: rotate(1deg);
  -o-transform: rotate(1deg);
  transform: rotate(1deg);
}
.wi-wind.towards-2-deg {
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  transform: rotate(2deg);
}
.wi-wind.towards-3-deg {
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  transform: rotate(3deg);
}
.wi-wind.towards-4-deg {
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  -o-transform: rotate(4deg);
  transform: rotate(4deg);
}
.wi-wind.towards-5-deg {
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
}
.wi-wind.towards-6-deg {
  -webkit-transform: rotate(6deg);
  -moz-transform: rotate(6deg);
  -ms-transform: rotate(6deg);
  -o-transform: rotate(6deg);
  transform: rotate(6deg);
}
.wi-wind.towards-7-deg {
  -webkit-transform: rotate(7deg);
  -moz-transform: rotate(7deg);
  -ms-transform: rotate(7deg);
  -o-transform: rotate(7deg);
  transform: rotate(7deg);
}
.wi-wind.towards-8-deg {
  -webkit-transform: rotate(8deg);
  -moz-transform: rotate(8deg);
  -ms-transform: rotate(8deg);
  -o-transform: rotate(8deg);
  transform: rotate(8deg);
}
.wi-wind.towards-9-deg {
  -webkit-transform: rotate(9deg);
  -moz-transform: rotate(9deg);
  -ms-transform: rotate(9deg);
  -o-transform: rotate(9deg);
  transform: rotate(9deg);
}
.wi-wind.towards-10-deg {
  -webkit-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  -o-transform: rotate(10deg);
  transform: rotate(10deg);
}
.wi-wind.towards-11-deg {
  -webkit-transform: rotate(11deg);
  -moz-transform: rotate(11deg);
  -ms-transform: rotate(11deg);
  -o-transform: rotate(11deg);
  transform: rotate(11deg);
}
.wi-wind.towards-12-deg {
  -webkit-transform: rotate(12deg);
  -moz-transform: rotate(12deg);
  -ms-transform: rotate(12deg);
  -o-transform: rotate(12deg);
  transform: rotate(12deg);
}
.wi-wind.towards-13-deg {
  -webkit-transform: rotate(13deg);
  -moz-transform: rotate(13deg);
  -ms-transform: rotate(13deg);
  -o-transform: rotate(13deg);
  transform: rotate(13deg);
}
.wi-wind.towards-14-deg {
  -webkit-transform: rotate(14deg);
  -moz-transform: rotate(14deg);
  -ms-transform: rotate(14deg);
  -o-transform: rotate(14deg);
  transform: rotate(14deg);
}
.wi-wind.towards-15-deg {
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  transform: rotate(15deg);
}
.wi-wind.towards-16-deg {
  -webkit-transform: rotate(16deg);
  -moz-transform: rotate(16deg);
  -ms-transform: rotate(16deg);
  -o-transform: rotate(16deg);
  transform: rotate(16deg);
}
.wi-wind.towards-17-deg {
  -webkit-transform: rotate(17deg);
  -moz-transform: rotate(17deg);
  -ms-transform: rotate(17deg);
  -o-transform: rotate(17deg);
  transform: rotate(17deg);
}
.wi-wind.towards-18-deg {
  -webkit-transform: rotate(18deg);
  -moz-transform: rotate(18deg);
  -ms-transform: rotate(18deg);
  -o-transform: rotate(18deg);
  transform: rotate(18deg);
}
.wi-wind.towards-19-deg {
  -webkit-transform: rotate(19deg);
  -moz-transform: rotate(19deg);
  -ms-transform: rotate(19deg);
  -o-transform: rotate(19deg);
  transform: rotate(19deg);
}
.wi-wind.towards-20-deg {
  -webkit-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  -o-transform: rotate(20deg);
  transform: rotate(20deg);
}
.wi-wind.towards-21-deg {
  -webkit-transform: rotate(21deg);
  -moz-transform: rotate(21deg);
  -ms-transform: rotate(21deg);
  -o-transform: rotate(21deg);
  transform: rotate(21deg);
}
.wi-wind.towards-22-deg {
  -webkit-transform: rotate(22deg);
  -moz-transform: rotate(22deg);
  -ms-transform: rotate(22deg);
  -o-transform: rotate(22deg);
  transform: rotate(22deg);
}
.wi-wind.towards-23-deg {
  -webkit-transform: rotate(23deg);
  -moz-transform: rotate(23deg);
  -ms-transform: rotate(23deg);
  -o-transform: rotate(23deg);
  transform: rotate(23deg);
}
.wi-wind.towards-24-deg {
  -webkit-transform: rotate(24deg);
  -moz-transform: rotate(24deg);
  -ms-transform: rotate(24deg);
  -o-transform: rotate(24deg);
  transform: rotate(24deg);
}
.wi-wind.towards-25-deg {
  -webkit-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);
}
.wi-wind.towards-26-deg {
  -webkit-transform: rotate(26deg);
  -moz-transform: rotate(26deg);
  -ms-transform: rotate(26deg);
  -o-transform: rotate(26deg);
  transform: rotate(26deg);
}
.wi-wind.towards-27-deg {
  -webkit-transform: rotate(27deg);
  -moz-transform: rotate(27deg);
  -ms-transform: rotate(27deg);
  -o-transform: rotate(27deg);
  transform: rotate(27deg);
}
.wi-wind.towards-28-deg {
  -webkit-transform: rotate(28deg);
  -moz-transform: rotate(28deg);
  -ms-transform: rotate(28deg);
  -o-transform: rotate(28deg);
  transform: rotate(28deg);
}
.wi-wind.towards-29-deg {
  -webkit-transform: rotate(29deg);
  -moz-transform: rotate(29deg);
  -ms-transform: rotate(29deg);
  -o-transform: rotate(29deg);
  transform: rotate(29deg);
}
.wi-wind.towards-30-deg {
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}
.wi-wind.towards-31-deg {
  -webkit-transform: rotate(31deg);
  -moz-transform: rotate(31deg);
  -ms-transform: rotate(31deg);
  -o-transform: rotate(31deg);
  transform: rotate(31deg);
}
.wi-wind.towards-32-deg {
  -webkit-transform: rotate(32deg);
  -moz-transform: rotate(32deg);
  -ms-transform: rotate(32deg);
  -o-transform: rotate(32deg);
  transform: rotate(32deg);
}
.wi-wind.towards-33-deg {
  -webkit-transform: rotate(33deg);
  -moz-transform: rotate(33deg);
  -ms-transform: rotate(33deg);
  -o-transform: rotate(33deg);
  transform: rotate(33deg);
}
.wi-wind.towards-34-deg {
  -webkit-transform: rotate(34deg);
  -moz-transform: rotate(34deg);
  -ms-transform: rotate(34deg);
  -o-transform: rotate(34deg);
  transform: rotate(34deg);
}
.wi-wind.towards-35-deg {
  -webkit-transform: rotate(35deg);
  -moz-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  -o-transform: rotate(35deg);
  transform: rotate(35deg);
}
.wi-wind.towards-36-deg {
  -webkit-transform: rotate(36deg);
  -moz-transform: rotate(36deg);
  -ms-transform: rotate(36deg);
  -o-transform: rotate(36deg);
  transform: rotate(36deg);
}
.wi-wind.towards-37-deg {
  -webkit-transform: rotate(37deg);
  -moz-transform: rotate(37deg);
  -ms-transform: rotate(37deg);
  -o-transform: rotate(37deg);
  transform: rotate(37deg);
}
.wi-wind.towards-38-deg {
  -webkit-transform: rotate(38deg);
  -moz-transform: rotate(38deg);
  -ms-transform: rotate(38deg);
  -o-transform: rotate(38deg);
  transform: rotate(38deg);
}
.wi-wind.towards-39-deg {
  -webkit-transform: rotate(39deg);
  -moz-transform: rotate(39deg);
  -ms-transform: rotate(39deg);
  -o-transform: rotate(39deg);
  transform: rotate(39deg);
}
.wi-wind.towards-40-deg {
  -webkit-transform: rotate(40deg);
  -moz-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  -o-transform: rotate(40deg);
  transform: rotate(40deg);
}
.wi-wind.towards-41-deg {
  -webkit-transform: rotate(41deg);
  -moz-transform: rotate(41deg);
  -ms-transform: rotate(41deg);
  -o-transform: rotate(41deg);
  transform: rotate(41deg);
}
.wi-wind.towards-42-deg {
  -webkit-transform: rotate(42deg);
  -moz-transform: rotate(42deg);
  -ms-transform: rotate(42deg);
  -o-transform: rotate(42deg);
  transform: rotate(42deg);
}
.wi-wind.towards-43-deg {
  -webkit-transform: rotate(43deg);
  -moz-transform: rotate(43deg);
  -ms-transform: rotate(43deg);
  -o-transform: rotate(43deg);
  transform: rotate(43deg);
}
.wi-wind.towards-44-deg {
  -webkit-transform: rotate(44deg);
  -moz-transform: rotate(44deg);
  -ms-transform: rotate(44deg);
  -o-transform: rotate(44deg);
  transform: rotate(44deg);
}
.wi-wind.towards-45-deg {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wi-wind.towards-46-deg {
  -webkit-transform: rotate(46deg);
  -moz-transform: rotate(46deg);
  -ms-transform: rotate(46deg);
  -o-transform: rotate(46deg);
  transform: rotate(46deg);
}
.wi-wind.towards-47-deg {
  -webkit-transform: rotate(47deg);
  -moz-transform: rotate(47deg);
  -ms-transform: rotate(47deg);
  -o-transform: rotate(47deg);
  transform: rotate(47deg);
}
.wi-wind.towards-48-deg {
  -webkit-transform: rotate(48deg);
  -moz-transform: rotate(48deg);
  -ms-transform: rotate(48deg);
  -o-transform: rotate(48deg);
  transform: rotate(48deg);
}
.wi-wind.towards-49-deg {
  -webkit-transform: rotate(49deg);
  -moz-transform: rotate(49deg);
  -ms-transform: rotate(49deg);
  -o-transform: rotate(49deg);
  transform: rotate(49deg);
}
.wi-wind.towards-50-deg {
  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  -ms-transform: rotate(50deg);
  -o-transform: rotate(50deg);
  transform: rotate(50deg);
}
.wi-wind.towards-51-deg {
  -webkit-transform: rotate(51deg);
  -moz-transform: rotate(51deg);
  -ms-transform: rotate(51deg);
  -o-transform: rotate(51deg);
  transform: rotate(51deg);
}
.wi-wind.towards-52-deg {
  -webkit-transform: rotate(52deg);
  -moz-transform: rotate(52deg);
  -ms-transform: rotate(52deg);
  -o-transform: rotate(52deg);
  transform: rotate(52deg);
}
.wi-wind.towards-53-deg {
  -webkit-transform: rotate(53deg);
  -moz-transform: rotate(53deg);
  -ms-transform: rotate(53deg);
  -o-transform: rotate(53deg);
  transform: rotate(53deg);
}
.wi-wind.towards-54-deg {
  -webkit-transform: rotate(54deg);
  -moz-transform: rotate(54deg);
  -ms-transform: rotate(54deg);
  -o-transform: rotate(54deg);
  transform: rotate(54deg);
}
.wi-wind.towards-55-deg {
  -webkit-transform: rotate(55deg);
  -moz-transform: rotate(55deg);
  -ms-transform: rotate(55deg);
  -o-transform: rotate(55deg);
  transform: rotate(55deg);
}
.wi-wind.towards-56-deg {
  -webkit-transform: rotate(56deg);
  -moz-transform: rotate(56deg);
  -ms-transform: rotate(56deg);
  -o-transform: rotate(56deg);
  transform: rotate(56deg);
}
.wi-wind.towards-57-deg {
  -webkit-transform: rotate(57deg);
  -moz-transform: rotate(57deg);
  -ms-transform: rotate(57deg);
  -o-transform: rotate(57deg);
  transform: rotate(57deg);
}
.wi-wind.towards-58-deg {
  -webkit-transform: rotate(58deg);
  -moz-transform: rotate(58deg);
  -ms-transform: rotate(58deg);
  -o-transform: rotate(58deg);
  transform: rotate(58deg);
}
.wi-wind.towards-59-deg {
  -webkit-transform: rotate(59deg);
  -moz-transform: rotate(59deg);
  -ms-transform: rotate(59deg);
  -o-transform: rotate(59deg);
  transform: rotate(59deg);
}
.wi-wind.towards-60-deg {
  -webkit-transform: rotate(60deg);
  -moz-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  -o-transform: rotate(60deg);
  transform: rotate(60deg);
}
.wi-wind.towards-61-deg {
  -webkit-transform: rotate(61deg);
  -moz-transform: rotate(61deg);
  -ms-transform: rotate(61deg);
  -o-transform: rotate(61deg);
  transform: rotate(61deg);
}
.wi-wind.towards-62-deg {
  -webkit-transform: rotate(62deg);
  -moz-transform: rotate(62deg);
  -ms-transform: rotate(62deg);
  -o-transform: rotate(62deg);
  transform: rotate(62deg);
}
.wi-wind.towards-63-deg {
  -webkit-transform: rotate(63deg);
  -moz-transform: rotate(63deg);
  -ms-transform: rotate(63deg);
  -o-transform: rotate(63deg);
  transform: rotate(63deg);
}
.wi-wind.towards-64-deg {
  -webkit-transform: rotate(64deg);
  -moz-transform: rotate(64deg);
  -ms-transform: rotate(64deg);
  -o-transform: rotate(64deg);
  transform: rotate(64deg);
}
.wi-wind.towards-65-deg {
  -webkit-transform: rotate(65deg);
  -moz-transform: rotate(65deg);
  -ms-transform: rotate(65deg);
  -o-transform: rotate(65deg);
  transform: rotate(65deg);
}
.wi-wind.towards-66-deg {
  -webkit-transform: rotate(66deg);
  -moz-transform: rotate(66deg);
  -ms-transform: rotate(66deg);
  -o-transform: rotate(66deg);
  transform: rotate(66deg);
}
.wi-wind.towards-67-deg {
  -webkit-transform: rotate(67deg);
  -moz-transform: rotate(67deg);
  -ms-transform: rotate(67deg);
  -o-transform: rotate(67deg);
  transform: rotate(67deg);
}
.wi-wind.towards-68-deg {
  -webkit-transform: rotate(68deg);
  -moz-transform: rotate(68deg);
  -ms-transform: rotate(68deg);
  -o-transform: rotate(68deg);
  transform: rotate(68deg);
}
.wi-wind.towards-69-deg {
  -webkit-transform: rotate(69deg);
  -moz-transform: rotate(69deg);
  -ms-transform: rotate(69deg);
  -o-transform: rotate(69deg);
  transform: rotate(69deg);
}
.wi-wind.towards-70-deg {
  -webkit-transform: rotate(70deg);
  -moz-transform: rotate(70deg);
  -ms-transform: rotate(70deg);
  -o-transform: rotate(70deg);
  transform: rotate(70deg);
}
.wi-wind.towards-71-deg {
  -webkit-transform: rotate(71deg);
  -moz-transform: rotate(71deg);
  -ms-transform: rotate(71deg);
  -o-transform: rotate(71deg);
  transform: rotate(71deg);
}
.wi-wind.towards-72-deg {
  -webkit-transform: rotate(72deg);
  -moz-transform: rotate(72deg);
  -ms-transform: rotate(72deg);
  -o-transform: rotate(72deg);
  transform: rotate(72deg);
}
.wi-wind.towards-73-deg {
  -webkit-transform: rotate(73deg);
  -moz-transform: rotate(73deg);
  -ms-transform: rotate(73deg);
  -o-transform: rotate(73deg);
  transform: rotate(73deg);
}
.wi-wind.towards-74-deg {
  -webkit-transform: rotate(74deg);
  -moz-transform: rotate(74deg);
  -ms-transform: rotate(74deg);
  -o-transform: rotate(74deg);
  transform: rotate(74deg);
}
.wi-wind.towards-75-deg {
  -webkit-transform: rotate(75deg);
  -moz-transform: rotate(75deg);
  -ms-transform: rotate(75deg);
  -o-transform: rotate(75deg);
  transform: rotate(75deg);
}
.wi-wind.towards-76-deg {
  -webkit-transform: rotate(76deg);
  -moz-transform: rotate(76deg);
  -ms-transform: rotate(76deg);
  -o-transform: rotate(76deg);
  transform: rotate(76deg);
}
.wi-wind.towards-77-deg {
  -webkit-transform: rotate(77deg);
  -moz-transform: rotate(77deg);
  -ms-transform: rotate(77deg);
  -o-transform: rotate(77deg);
  transform: rotate(77deg);
}
.wi-wind.towards-78-deg {
  -webkit-transform: rotate(78deg);
  -moz-transform: rotate(78deg);
  -ms-transform: rotate(78deg);
  -o-transform: rotate(78deg);
  transform: rotate(78deg);
}
.wi-wind.towards-79-deg {
  -webkit-transform: rotate(79deg);
  -moz-transform: rotate(79deg);
  -ms-transform: rotate(79deg);
  -o-transform: rotate(79deg);
  transform: rotate(79deg);
}
.wi-wind.towards-80-deg {
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -ms-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}
.wi-wind.towards-81-deg {
  -webkit-transform: rotate(81deg);
  -moz-transform: rotate(81deg);
  -ms-transform: rotate(81deg);
  -o-transform: rotate(81deg);
  transform: rotate(81deg);
}
.wi-wind.towards-82-deg {
  -webkit-transform: rotate(82deg);
  -moz-transform: rotate(82deg);
  -ms-transform: rotate(82deg);
  -o-transform: rotate(82deg);
  transform: rotate(82deg);
}
.wi-wind.towards-83-deg {
  -webkit-transform: rotate(83deg);
  -moz-transform: rotate(83deg);
  -ms-transform: rotate(83deg);
  -o-transform: rotate(83deg);
  transform: rotate(83deg);
}
.wi-wind.towards-84-deg {
  -webkit-transform: rotate(84deg);
  -moz-transform: rotate(84deg);
  -ms-transform: rotate(84deg);
  -o-transform: rotate(84deg);
  transform: rotate(84deg);
}
.wi-wind.towards-85-deg {
  -webkit-transform: rotate(85deg);
  -moz-transform: rotate(85deg);
  -ms-transform: rotate(85deg);
  -o-transform: rotate(85deg);
  transform: rotate(85deg);
}
.wi-wind.towards-86-deg {
  -webkit-transform: rotate(86deg);
  -moz-transform: rotate(86deg);
  -ms-transform: rotate(86deg);
  -o-transform: rotate(86deg);
  transform: rotate(86deg);
}
.wi-wind.towards-87-deg {
  -webkit-transform: rotate(87deg);
  -moz-transform: rotate(87deg);
  -ms-transform: rotate(87deg);
  -o-transform: rotate(87deg);
  transform: rotate(87deg);
}
.wi-wind.towards-88-deg {
  -webkit-transform: rotate(88deg);
  -moz-transform: rotate(88deg);
  -ms-transform: rotate(88deg);
  -o-transform: rotate(88deg);
  transform: rotate(88deg);
}
.wi-wind.towards-89-deg {
  -webkit-transform: rotate(89deg);
  -moz-transform: rotate(89deg);
  -ms-transform: rotate(89deg);
  -o-transform: rotate(89deg);
  transform: rotate(89deg);
}
.wi-wind.towards-90-deg {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.wi-wind.towards-91-deg {
  -webkit-transform: rotate(91deg);
  -moz-transform: rotate(91deg);
  -ms-transform: rotate(91deg);
  -o-transform: rotate(91deg);
  transform: rotate(91deg);
}
.wi-wind.towards-92-deg {
  -webkit-transform: rotate(92deg);
  -moz-transform: rotate(92deg);
  -ms-transform: rotate(92deg);
  -o-transform: rotate(92deg);
  transform: rotate(92deg);
}
.wi-wind.towards-93-deg {
  -webkit-transform: rotate(93deg);
  -moz-transform: rotate(93deg);
  -ms-transform: rotate(93deg);
  -o-transform: rotate(93deg);
  transform: rotate(93deg);
}
.wi-wind.towards-94-deg {
  -webkit-transform: rotate(94deg);
  -moz-transform: rotate(94deg);
  -ms-transform: rotate(94deg);
  -o-transform: rotate(94deg);
  transform: rotate(94deg);
}
.wi-wind.towards-95-deg {
  -webkit-transform: rotate(95deg);
  -moz-transform: rotate(95deg);
  -ms-transform: rotate(95deg);
  -o-transform: rotate(95deg);
  transform: rotate(95deg);
}
.wi-wind.towards-96-deg {
  -webkit-transform: rotate(96deg);
  -moz-transform: rotate(96deg);
  -ms-transform: rotate(96deg);
  -o-transform: rotate(96deg);
  transform: rotate(96deg);
}
.wi-wind.towards-97-deg {
  -webkit-transform: rotate(97deg);
  -moz-transform: rotate(97deg);
  -ms-transform: rotate(97deg);
  -o-transform: rotate(97deg);
  transform: rotate(97deg);
}
.wi-wind.towards-98-deg {
  -webkit-transform: rotate(98deg);
  -moz-transform: rotate(98deg);
  -ms-transform: rotate(98deg);
  -o-transform: rotate(98deg);
  transform: rotate(98deg);
}
.wi-wind.towards-99-deg {
  -webkit-transform: rotate(99deg);
  -moz-transform: rotate(99deg);
  -ms-transform: rotate(99deg);
  -o-transform: rotate(99deg);
  transform: rotate(99deg);
}
.wi-wind.towards-100-deg {
  -webkit-transform: rotate(100deg);
  -moz-transform: rotate(100deg);
  -ms-transform: rotate(100deg);
  -o-transform: rotate(100deg);
  transform: rotate(100deg);
}
.wi-wind.towards-101-deg {
  -webkit-transform: rotate(101deg);
  -moz-transform: rotate(101deg);
  -ms-transform: rotate(101deg);
  -o-transform: rotate(101deg);
  transform: rotate(101deg);
}
.wi-wind.towards-102-deg {
  -webkit-transform: rotate(102deg);
  -moz-transform: rotate(102deg);
  -ms-transform: rotate(102deg);
  -o-transform: rotate(102deg);
  transform: rotate(102deg);
}
.wi-wind.towards-103-deg {
  -webkit-transform: rotate(103deg);
  -moz-transform: rotate(103deg);
  -ms-transform: rotate(103deg);
  -o-transform: rotate(103deg);
  transform: rotate(103deg);
}
.wi-wind.towards-104-deg {
  -webkit-transform: rotate(104deg);
  -moz-transform: rotate(104deg);
  -ms-transform: rotate(104deg);
  -o-transform: rotate(104deg);
  transform: rotate(104deg);
}
.wi-wind.towards-105-deg {
  -webkit-transform: rotate(105deg);
  -moz-transform: rotate(105deg);
  -ms-transform: rotate(105deg);
  -o-transform: rotate(105deg);
  transform: rotate(105deg);
}
.wi-wind.towards-106-deg {
  -webkit-transform: rotate(106deg);
  -moz-transform: rotate(106deg);
  -ms-transform: rotate(106deg);
  -o-transform: rotate(106deg);
  transform: rotate(106deg);
}
.wi-wind.towards-107-deg {
  -webkit-transform: rotate(107deg);
  -moz-transform: rotate(107deg);
  -ms-transform: rotate(107deg);
  -o-transform: rotate(107deg);
  transform: rotate(107deg);
}
.wi-wind.towards-108-deg {
  -webkit-transform: rotate(108deg);
  -moz-transform: rotate(108deg);
  -ms-transform: rotate(108deg);
  -o-transform: rotate(108deg);
  transform: rotate(108deg);
}
.wi-wind.towards-109-deg {
  -webkit-transform: rotate(109deg);
  -moz-transform: rotate(109deg);
  -ms-transform: rotate(109deg);
  -o-transform: rotate(109deg);
  transform: rotate(109deg);
}
.wi-wind.towards-110-deg {
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  -ms-transform: rotate(110deg);
  -o-transform: rotate(110deg);
  transform: rotate(110deg);
}
.wi-wind.towards-111-deg {
  -webkit-transform: rotate(111deg);
  -moz-transform: rotate(111deg);
  -ms-transform: rotate(111deg);
  -o-transform: rotate(111deg);
  transform: rotate(111deg);
}
.wi-wind.towards-112-deg {
  -webkit-transform: rotate(112deg);
  -moz-transform: rotate(112deg);
  -ms-transform: rotate(112deg);
  -o-transform: rotate(112deg);
  transform: rotate(112deg);
}
.wi-wind.towards-113-deg {
  -webkit-transform: rotate(113deg);
  -moz-transform: rotate(113deg);
  -ms-transform: rotate(113deg);
  -o-transform: rotate(113deg);
  transform: rotate(113deg);
}
.wi-wind.towards-114-deg {
  -webkit-transform: rotate(114deg);
  -moz-transform: rotate(114deg);
  -ms-transform: rotate(114deg);
  -o-transform: rotate(114deg);
  transform: rotate(114deg);
}
.wi-wind.towards-115-deg {
  -webkit-transform: rotate(115deg);
  -moz-transform: rotate(115deg);
  -ms-transform: rotate(115deg);
  -o-transform: rotate(115deg);
  transform: rotate(115deg);
}
.wi-wind.towards-116-deg {
  -webkit-transform: rotate(116deg);
  -moz-transform: rotate(116deg);
  -ms-transform: rotate(116deg);
  -o-transform: rotate(116deg);
  transform: rotate(116deg);
}
.wi-wind.towards-117-deg {
  -webkit-transform: rotate(117deg);
  -moz-transform: rotate(117deg);
  -ms-transform: rotate(117deg);
  -o-transform: rotate(117deg);
  transform: rotate(117deg);
}
.wi-wind.towards-118-deg {
  -webkit-transform: rotate(118deg);
  -moz-transform: rotate(118deg);
  -ms-transform: rotate(118deg);
  -o-transform: rotate(118deg);
  transform: rotate(118deg);
}
.wi-wind.towards-119-deg {
  -webkit-transform: rotate(119deg);
  -moz-transform: rotate(119deg);
  -ms-transform: rotate(119deg);
  -o-transform: rotate(119deg);
  transform: rotate(119deg);
}
.wi-wind.towards-120-deg {
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);
}
.wi-wind.towards-121-deg {
  -webkit-transform: rotate(121deg);
  -moz-transform: rotate(121deg);
  -ms-transform: rotate(121deg);
  -o-transform: rotate(121deg);
  transform: rotate(121deg);
}
.wi-wind.towards-122-deg {
  -webkit-transform: rotate(122deg);
  -moz-transform: rotate(122deg);
  -ms-transform: rotate(122deg);
  -o-transform: rotate(122deg);
  transform: rotate(122deg);
}
.wi-wind.towards-123-deg {
  -webkit-transform: rotate(123deg);
  -moz-transform: rotate(123deg);
  -ms-transform: rotate(123deg);
  -o-transform: rotate(123deg);
  transform: rotate(123deg);
}
.wi-wind.towards-124-deg {
  -webkit-transform: rotate(124deg);
  -moz-transform: rotate(124deg);
  -ms-transform: rotate(124deg);
  -o-transform: rotate(124deg);
  transform: rotate(124deg);
}
.wi-wind.towards-125-deg {
  -webkit-transform: rotate(125deg);
  -moz-transform: rotate(125deg);
  -ms-transform: rotate(125deg);
  -o-transform: rotate(125deg);
  transform: rotate(125deg);
}
.wi-wind.towards-126-deg {
  -webkit-transform: rotate(126deg);
  -moz-transform: rotate(126deg);
  -ms-transform: rotate(126deg);
  -o-transform: rotate(126deg);
  transform: rotate(126deg);
}
.wi-wind.towards-127-deg {
  -webkit-transform: rotate(127deg);
  -moz-transform: rotate(127deg);
  -ms-transform: rotate(127deg);
  -o-transform: rotate(127deg);
  transform: rotate(127deg);
}
.wi-wind.towards-128-deg {
  -webkit-transform: rotate(128deg);
  -moz-transform: rotate(128deg);
  -ms-transform: rotate(128deg);
  -o-transform: rotate(128deg);
  transform: rotate(128deg);
}
.wi-wind.towards-129-deg {
  -webkit-transform: rotate(129deg);
  -moz-transform: rotate(129deg);
  -ms-transform: rotate(129deg);
  -o-transform: rotate(129deg);
  transform: rotate(129deg);
}
.wi-wind.towards-130-deg {
  -webkit-transform: rotate(130deg);
  -moz-transform: rotate(130deg);
  -ms-transform: rotate(130deg);
  -o-transform: rotate(130deg);
  transform: rotate(130deg);
}
.wi-wind.towards-131-deg {
  -webkit-transform: rotate(131deg);
  -moz-transform: rotate(131deg);
  -ms-transform: rotate(131deg);
  -o-transform: rotate(131deg);
  transform: rotate(131deg);
}
.wi-wind.towards-132-deg {
  -webkit-transform: rotate(132deg);
  -moz-transform: rotate(132deg);
  -ms-transform: rotate(132deg);
  -o-transform: rotate(132deg);
  transform: rotate(132deg);
}
.wi-wind.towards-133-deg {
  -webkit-transform: rotate(133deg);
  -moz-transform: rotate(133deg);
  -ms-transform: rotate(133deg);
  -o-transform: rotate(133deg);
  transform: rotate(133deg);
}
.wi-wind.towards-134-deg {
  -webkit-transform: rotate(134deg);
  -moz-transform: rotate(134deg);
  -ms-transform: rotate(134deg);
  -o-transform: rotate(134deg);
  transform: rotate(134deg);
}
.wi-wind.towards-135-deg {
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.wi-wind.towards-136-deg {
  -webkit-transform: rotate(136deg);
  -moz-transform: rotate(136deg);
  -ms-transform: rotate(136deg);
  -o-transform: rotate(136deg);
  transform: rotate(136deg);
}
.wi-wind.towards-137-deg {
  -webkit-transform: rotate(137deg);
  -moz-transform: rotate(137deg);
  -ms-transform: rotate(137deg);
  -o-transform: rotate(137deg);
  transform: rotate(137deg);
}
.wi-wind.towards-138-deg {
  -webkit-transform: rotate(138deg);
  -moz-transform: rotate(138deg);
  -ms-transform: rotate(138deg);
  -o-transform: rotate(138deg);
  transform: rotate(138deg);
}
.wi-wind.towards-139-deg {
  -webkit-transform: rotate(139deg);
  -moz-transform: rotate(139deg);
  -ms-transform: rotate(139deg);
  -o-transform: rotate(139deg);
  transform: rotate(139deg);
}
.wi-wind.towards-140-deg {
  -webkit-transform: rotate(140deg);
  -moz-transform: rotate(140deg);
  -ms-transform: rotate(140deg);
  -o-transform: rotate(140deg);
  transform: rotate(140deg);
}
.wi-wind.towards-141-deg {
  -webkit-transform: rotate(141deg);
  -moz-transform: rotate(141deg);
  -ms-transform: rotate(141deg);
  -o-transform: rotate(141deg);
  transform: rotate(141deg);
}
.wi-wind.towards-142-deg {
  -webkit-transform: rotate(142deg);
  -moz-transform: rotate(142deg);
  -ms-transform: rotate(142deg);
  -o-transform: rotate(142deg);
  transform: rotate(142deg);
}
.wi-wind.towards-143-deg {
  -webkit-transform: rotate(143deg);
  -moz-transform: rotate(143deg);
  -ms-transform: rotate(143deg);
  -o-transform: rotate(143deg);
  transform: rotate(143deg);
}
.wi-wind.towards-144-deg {
  -webkit-transform: rotate(144deg);
  -moz-transform: rotate(144deg);
  -ms-transform: rotate(144deg);
  -o-transform: rotate(144deg);
  transform: rotate(144deg);
}
.wi-wind.towards-145-deg {
  -webkit-transform: rotate(145deg);
  -moz-transform: rotate(145deg);
  -ms-transform: rotate(145deg);
  -o-transform: rotate(145deg);
  transform: rotate(145deg);
}
.wi-wind.towards-146-deg {
  -webkit-transform: rotate(146deg);
  -moz-transform: rotate(146deg);
  -ms-transform: rotate(146deg);
  -o-transform: rotate(146deg);
  transform: rotate(146deg);
}
.wi-wind.towards-147-deg {
  -webkit-transform: rotate(147deg);
  -moz-transform: rotate(147deg);
  -ms-transform: rotate(147deg);
  -o-transform: rotate(147deg);
  transform: rotate(147deg);
}
.wi-wind.towards-148-deg {
  -webkit-transform: rotate(148deg);
  -moz-transform: rotate(148deg);
  -ms-transform: rotate(148deg);
  -o-transform: rotate(148deg);
  transform: rotate(148deg);
}
.wi-wind.towards-149-deg {
  -webkit-transform: rotate(149deg);
  -moz-transform: rotate(149deg);
  -ms-transform: rotate(149deg);
  -o-transform: rotate(149deg);
  transform: rotate(149deg);
}
.wi-wind.towards-150-deg {
  -webkit-transform: rotate(150deg);
  -moz-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  -o-transform: rotate(150deg);
  transform: rotate(150deg);
}
.wi-wind.towards-151-deg {
  -webkit-transform: rotate(151deg);
  -moz-transform: rotate(151deg);
  -ms-transform: rotate(151deg);
  -o-transform: rotate(151deg);
  transform: rotate(151deg);
}
.wi-wind.towards-152-deg {
  -webkit-transform: rotate(152deg);
  -moz-transform: rotate(152deg);
  -ms-transform: rotate(152deg);
  -o-transform: rotate(152deg);
  transform: rotate(152deg);
}
.wi-wind.towards-153-deg {
  -webkit-transform: rotate(153deg);
  -moz-transform: rotate(153deg);
  -ms-transform: rotate(153deg);
  -o-transform: rotate(153deg);
  transform: rotate(153deg);
}
.wi-wind.towards-154-deg {
  -webkit-transform: rotate(154deg);
  -moz-transform: rotate(154deg);
  -ms-transform: rotate(154deg);
  -o-transform: rotate(154deg);
  transform: rotate(154deg);
}
.wi-wind.towards-155-deg {
  -webkit-transform: rotate(155deg);
  -moz-transform: rotate(155deg);
  -ms-transform: rotate(155deg);
  -o-transform: rotate(155deg);
  transform: rotate(155deg);
}
.wi-wind.towards-156-deg {
  -webkit-transform: rotate(156deg);
  -moz-transform: rotate(156deg);
  -ms-transform: rotate(156deg);
  -o-transform: rotate(156deg);
  transform: rotate(156deg);
}
.wi-wind.towards-157-deg {
  -webkit-transform: rotate(157deg);
  -moz-transform: rotate(157deg);
  -ms-transform: rotate(157deg);
  -o-transform: rotate(157deg);
  transform: rotate(157deg);
}
.wi-wind.towards-158-deg {
  -webkit-transform: rotate(158deg);
  -moz-transform: rotate(158deg);
  -ms-transform: rotate(158deg);
  -o-transform: rotate(158deg);
  transform: rotate(158deg);
}
.wi-wind.towards-159-deg {
  -webkit-transform: rotate(159deg);
  -moz-transform: rotate(159deg);
  -ms-transform: rotate(159deg);
  -o-transform: rotate(159deg);
  transform: rotate(159deg);
}
.wi-wind.towards-160-deg {
  -webkit-transform: rotate(160deg);
  -moz-transform: rotate(160deg);
  -ms-transform: rotate(160deg);
  -o-transform: rotate(160deg);
  transform: rotate(160deg);
}
.wi-wind.towards-161-deg {
  -webkit-transform: rotate(161deg);
  -moz-transform: rotate(161deg);
  -ms-transform: rotate(161deg);
  -o-transform: rotate(161deg);
  transform: rotate(161deg);
}
.wi-wind.towards-162-deg {
  -webkit-transform: rotate(162deg);
  -moz-transform: rotate(162deg);
  -ms-transform: rotate(162deg);
  -o-transform: rotate(162deg);
  transform: rotate(162deg);
}
.wi-wind.towards-163-deg {
  -webkit-transform: rotate(163deg);
  -moz-transform: rotate(163deg);
  -ms-transform: rotate(163deg);
  -o-transform: rotate(163deg);
  transform: rotate(163deg);
}
.wi-wind.towards-164-deg {
  -webkit-transform: rotate(164deg);
  -moz-transform: rotate(164deg);
  -ms-transform: rotate(164deg);
  -o-transform: rotate(164deg);
  transform: rotate(164deg);
}
.wi-wind.towards-165-deg {
  -webkit-transform: rotate(165deg);
  -moz-transform: rotate(165deg);
  -ms-transform: rotate(165deg);
  -o-transform: rotate(165deg);
  transform: rotate(165deg);
}
.wi-wind.towards-166-deg {
  -webkit-transform: rotate(166deg);
  -moz-transform: rotate(166deg);
  -ms-transform: rotate(166deg);
  -o-transform: rotate(166deg);
  transform: rotate(166deg);
}
.wi-wind.towards-167-deg {
  -webkit-transform: rotate(167deg);
  -moz-transform: rotate(167deg);
  -ms-transform: rotate(167deg);
  -o-transform: rotate(167deg);
  transform: rotate(167deg);
}
.wi-wind.towards-168-deg {
  -webkit-transform: rotate(168deg);
  -moz-transform: rotate(168deg);
  -ms-transform: rotate(168deg);
  -o-transform: rotate(168deg);
  transform: rotate(168deg);
}
.wi-wind.towards-169-deg {
  -webkit-transform: rotate(169deg);
  -moz-transform: rotate(169deg);
  -ms-transform: rotate(169deg);
  -o-transform: rotate(169deg);
  transform: rotate(169deg);
}
.wi-wind.towards-170-deg {
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -ms-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  transform: rotate(170deg);
}
.wi-wind.towards-171-deg {
  -webkit-transform: rotate(171deg);
  -moz-transform: rotate(171deg);
  -ms-transform: rotate(171deg);
  -o-transform: rotate(171deg);
  transform: rotate(171deg);
}
.wi-wind.towards-172-deg {
  -webkit-transform: rotate(172deg);
  -moz-transform: rotate(172deg);
  -ms-transform: rotate(172deg);
  -o-transform: rotate(172deg);
  transform: rotate(172deg);
}
.wi-wind.towards-173-deg {
  -webkit-transform: rotate(173deg);
  -moz-transform: rotate(173deg);
  -ms-transform: rotate(173deg);
  -o-transform: rotate(173deg);
  transform: rotate(173deg);
}
.wi-wind.towards-174-deg {
  -webkit-transform: rotate(174deg);
  -moz-transform: rotate(174deg);
  -ms-transform: rotate(174deg);
  -o-transform: rotate(174deg);
  transform: rotate(174deg);
}
.wi-wind.towards-175-deg {
  -webkit-transform: rotate(175deg);
  -moz-transform: rotate(175deg);
  -ms-transform: rotate(175deg);
  -o-transform: rotate(175deg);
  transform: rotate(175deg);
}
.wi-wind.towards-176-deg {
  -webkit-transform: rotate(176deg);
  -moz-transform: rotate(176deg);
  -ms-transform: rotate(176deg);
  -o-transform: rotate(176deg);
  transform: rotate(176deg);
}
.wi-wind.towards-177-deg {
  -webkit-transform: rotate(177deg);
  -moz-transform: rotate(177deg);
  -ms-transform: rotate(177deg);
  -o-transform: rotate(177deg);
  transform: rotate(177deg);
}
.wi-wind.towards-178-deg {
  -webkit-transform: rotate(178deg);
  -moz-transform: rotate(178deg);
  -ms-transform: rotate(178deg);
  -o-transform: rotate(178deg);
  transform: rotate(178deg);
}
.wi-wind.towards-179-deg {
  -webkit-transform: rotate(179deg);
  -moz-transform: rotate(179deg);
  -ms-transform: rotate(179deg);
  -o-transform: rotate(179deg);
  transform: rotate(179deg);
}
.wi-wind.towards-180-deg {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-wind.towards-181-deg {
  -webkit-transform: rotate(181deg);
  -moz-transform: rotate(181deg);
  -ms-transform: rotate(181deg);
  -o-transform: rotate(181deg);
  transform: rotate(181deg);
}
.wi-wind.towards-182-deg {
  -webkit-transform: rotate(182deg);
  -moz-transform: rotate(182deg);
  -ms-transform: rotate(182deg);
  -o-transform: rotate(182deg);
  transform: rotate(182deg);
}
.wi-wind.towards-183-deg {
  -webkit-transform: rotate(183deg);
  -moz-transform: rotate(183deg);
  -ms-transform: rotate(183deg);
  -o-transform: rotate(183deg);
  transform: rotate(183deg);
}
.wi-wind.towards-184-deg {
  -webkit-transform: rotate(184deg);
  -moz-transform: rotate(184deg);
  -ms-transform: rotate(184deg);
  -o-transform: rotate(184deg);
  transform: rotate(184deg);
}
.wi-wind.towards-185-deg {
  -webkit-transform: rotate(185deg);
  -moz-transform: rotate(185deg);
  -ms-transform: rotate(185deg);
  -o-transform: rotate(185deg);
  transform: rotate(185deg);
}
.wi-wind.towards-186-deg {
  -webkit-transform: rotate(186deg);
  -moz-transform: rotate(186deg);
  -ms-transform: rotate(186deg);
  -o-transform: rotate(186deg);
  transform: rotate(186deg);
}
.wi-wind.towards-187-deg {
  -webkit-transform: rotate(187deg);
  -moz-transform: rotate(187deg);
  -ms-transform: rotate(187deg);
  -o-transform: rotate(187deg);
  transform: rotate(187deg);
}
.wi-wind.towards-188-deg {
  -webkit-transform: rotate(188deg);
  -moz-transform: rotate(188deg);
  -ms-transform: rotate(188deg);
  -o-transform: rotate(188deg);
  transform: rotate(188deg);
}
.wi-wind.towards-189-deg {
  -webkit-transform: rotate(189deg);
  -moz-transform: rotate(189deg);
  -ms-transform: rotate(189deg);
  -o-transform: rotate(189deg);
  transform: rotate(189deg);
}
.wi-wind.towards-190-deg {
  -webkit-transform: rotate(190deg);
  -moz-transform: rotate(190deg);
  -ms-transform: rotate(190deg);
  -o-transform: rotate(190deg);
  transform: rotate(190deg);
}
.wi-wind.towards-191-deg {
  -webkit-transform: rotate(191deg);
  -moz-transform: rotate(191deg);
  -ms-transform: rotate(191deg);
  -o-transform: rotate(191deg);
  transform: rotate(191deg);
}
.wi-wind.towards-192-deg {
  -webkit-transform: rotate(192deg);
  -moz-transform: rotate(192deg);
  -ms-transform: rotate(192deg);
  -o-transform: rotate(192deg);
  transform: rotate(192deg);
}
.wi-wind.towards-193-deg {
  -webkit-transform: rotate(193deg);
  -moz-transform: rotate(193deg);
  -ms-transform: rotate(193deg);
  -o-transform: rotate(193deg);
  transform: rotate(193deg);
}
.wi-wind.towards-194-deg {
  -webkit-transform: rotate(194deg);
  -moz-transform: rotate(194deg);
  -ms-transform: rotate(194deg);
  -o-transform: rotate(194deg);
  transform: rotate(194deg);
}
.wi-wind.towards-195-deg {
  -webkit-transform: rotate(195deg);
  -moz-transform: rotate(195deg);
  -ms-transform: rotate(195deg);
  -o-transform: rotate(195deg);
  transform: rotate(195deg);
}
.wi-wind.towards-196-deg {
  -webkit-transform: rotate(196deg);
  -moz-transform: rotate(196deg);
  -ms-transform: rotate(196deg);
  -o-transform: rotate(196deg);
  transform: rotate(196deg);
}
.wi-wind.towards-197-deg {
  -webkit-transform: rotate(197deg);
  -moz-transform: rotate(197deg);
  -ms-transform: rotate(197deg);
  -o-transform: rotate(197deg);
  transform: rotate(197deg);
}
.wi-wind.towards-198-deg {
  -webkit-transform: rotate(198deg);
  -moz-transform: rotate(198deg);
  -ms-transform: rotate(198deg);
  -o-transform: rotate(198deg);
  transform: rotate(198deg);
}
.wi-wind.towards-199-deg {
  -webkit-transform: rotate(199deg);
  -moz-transform: rotate(199deg);
  -ms-transform: rotate(199deg);
  -o-transform: rotate(199deg);
  transform: rotate(199deg);
}
.wi-wind.towards-200-deg {
  -webkit-transform: rotate(200deg);
  -moz-transform: rotate(200deg);
  -ms-transform: rotate(200deg);
  -o-transform: rotate(200deg);
  transform: rotate(200deg);
}
.wi-wind.towards-201-deg {
  -webkit-transform: rotate(201deg);
  -moz-transform: rotate(201deg);
  -ms-transform: rotate(201deg);
  -o-transform: rotate(201deg);
  transform: rotate(201deg);
}
.wi-wind.towards-202-deg {
  -webkit-transform: rotate(202deg);
  -moz-transform: rotate(202deg);
  -ms-transform: rotate(202deg);
  -o-transform: rotate(202deg);
  transform: rotate(202deg);
}
.wi-wind.towards-203-deg {
  -webkit-transform: rotate(203deg);
  -moz-transform: rotate(203deg);
  -ms-transform: rotate(203deg);
  -o-transform: rotate(203deg);
  transform: rotate(203deg);
}
.wi-wind.towards-204-deg {
  -webkit-transform: rotate(204deg);
  -moz-transform: rotate(204deg);
  -ms-transform: rotate(204deg);
  -o-transform: rotate(204deg);
  transform: rotate(204deg);
}
.wi-wind.towards-205-deg {
  -webkit-transform: rotate(205deg);
  -moz-transform: rotate(205deg);
  -ms-transform: rotate(205deg);
  -o-transform: rotate(205deg);
  transform: rotate(205deg);
}
.wi-wind.towards-206-deg {
  -webkit-transform: rotate(206deg);
  -moz-transform: rotate(206deg);
  -ms-transform: rotate(206deg);
  -o-transform: rotate(206deg);
  transform: rotate(206deg);
}
.wi-wind.towards-207-deg {
  -webkit-transform: rotate(207deg);
  -moz-transform: rotate(207deg);
  -ms-transform: rotate(207deg);
  -o-transform: rotate(207deg);
  transform: rotate(207deg);
}
.wi-wind.towards-208-deg {
  -webkit-transform: rotate(208deg);
  -moz-transform: rotate(208deg);
  -ms-transform: rotate(208deg);
  -o-transform: rotate(208deg);
  transform: rotate(208deg);
}
.wi-wind.towards-209-deg {
  -webkit-transform: rotate(209deg);
  -moz-transform: rotate(209deg);
  -ms-transform: rotate(209deg);
  -o-transform: rotate(209deg);
  transform: rotate(209deg);
}
.wi-wind.towards-210-deg {
  -webkit-transform: rotate(210deg);
  -moz-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  -o-transform: rotate(210deg);
  transform: rotate(210deg);
}
.wi-wind.towards-211-deg {
  -webkit-transform: rotate(211deg);
  -moz-transform: rotate(211deg);
  -ms-transform: rotate(211deg);
  -o-transform: rotate(211deg);
  transform: rotate(211deg);
}
.wi-wind.towards-212-deg {
  -webkit-transform: rotate(212deg);
  -moz-transform: rotate(212deg);
  -ms-transform: rotate(212deg);
  -o-transform: rotate(212deg);
  transform: rotate(212deg);
}
.wi-wind.towards-213-deg {
  -webkit-transform: rotate(213deg);
  -moz-transform: rotate(213deg);
  -ms-transform: rotate(213deg);
  -o-transform: rotate(213deg);
  transform: rotate(213deg);
}
.wi-wind.towards-214-deg {
  -webkit-transform: rotate(214deg);
  -moz-transform: rotate(214deg);
  -ms-transform: rotate(214deg);
  -o-transform: rotate(214deg);
  transform: rotate(214deg);
}
.wi-wind.towards-215-deg {
  -webkit-transform: rotate(215deg);
  -moz-transform: rotate(215deg);
  -ms-transform: rotate(215deg);
  -o-transform: rotate(215deg);
  transform: rotate(215deg);
}
.wi-wind.towards-216-deg {
  -webkit-transform: rotate(216deg);
  -moz-transform: rotate(216deg);
  -ms-transform: rotate(216deg);
  -o-transform: rotate(216deg);
  transform: rotate(216deg);
}
.wi-wind.towards-217-deg {
  -webkit-transform: rotate(217deg);
  -moz-transform: rotate(217deg);
  -ms-transform: rotate(217deg);
  -o-transform: rotate(217deg);
  transform: rotate(217deg);
}
.wi-wind.towards-218-deg {
  -webkit-transform: rotate(218deg);
  -moz-transform: rotate(218deg);
  -ms-transform: rotate(218deg);
  -o-transform: rotate(218deg);
  transform: rotate(218deg);
}
.wi-wind.towards-219-deg {
  -webkit-transform: rotate(219deg);
  -moz-transform: rotate(219deg);
  -ms-transform: rotate(219deg);
  -o-transform: rotate(219deg);
  transform: rotate(219deg);
}
.wi-wind.towards-220-deg {
  -webkit-transform: rotate(220deg);
  -moz-transform: rotate(220deg);
  -ms-transform: rotate(220deg);
  -o-transform: rotate(220deg);
  transform: rotate(220deg);
}
.wi-wind.towards-221-deg {
  -webkit-transform: rotate(221deg);
  -moz-transform: rotate(221deg);
  -ms-transform: rotate(221deg);
  -o-transform: rotate(221deg);
  transform: rotate(221deg);
}
.wi-wind.towards-222-deg {
  -webkit-transform: rotate(222deg);
  -moz-transform: rotate(222deg);
  -ms-transform: rotate(222deg);
  -o-transform: rotate(222deg);
  transform: rotate(222deg);
}
.wi-wind.towards-223-deg {
  -webkit-transform: rotate(223deg);
  -moz-transform: rotate(223deg);
  -ms-transform: rotate(223deg);
  -o-transform: rotate(223deg);
  transform: rotate(223deg);
}
.wi-wind.towards-224-deg {
  -webkit-transform: rotate(224deg);
  -moz-transform: rotate(224deg);
  -ms-transform: rotate(224deg);
  -o-transform: rotate(224deg);
  transform: rotate(224deg);
}
.wi-wind.towards-225-deg {
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  transform: rotate(225deg);
}
.wi-wind.towards-226-deg {
  -webkit-transform: rotate(226deg);
  -moz-transform: rotate(226deg);
  -ms-transform: rotate(226deg);
  -o-transform: rotate(226deg);
  transform: rotate(226deg);
}
.wi-wind.towards-227-deg {
  -webkit-transform: rotate(227deg);
  -moz-transform: rotate(227deg);
  -ms-transform: rotate(227deg);
  -o-transform: rotate(227deg);
  transform: rotate(227deg);
}
.wi-wind.towards-228-deg {
  -webkit-transform: rotate(228deg);
  -moz-transform: rotate(228deg);
  -ms-transform: rotate(228deg);
  -o-transform: rotate(228deg);
  transform: rotate(228deg);
}
.wi-wind.towards-229-deg {
  -webkit-transform: rotate(229deg);
  -moz-transform: rotate(229deg);
  -ms-transform: rotate(229deg);
  -o-transform: rotate(229deg);
  transform: rotate(229deg);
}
.wi-wind.towards-230-deg {
  -webkit-transform: rotate(230deg);
  -moz-transform: rotate(230deg);
  -ms-transform: rotate(230deg);
  -o-transform: rotate(230deg);
  transform: rotate(230deg);
}
.wi-wind.towards-231-deg {
  -webkit-transform: rotate(231deg);
  -moz-transform: rotate(231deg);
  -ms-transform: rotate(231deg);
  -o-transform: rotate(231deg);
  transform: rotate(231deg);
}
.wi-wind.towards-232-deg {
  -webkit-transform: rotate(232deg);
  -moz-transform: rotate(232deg);
  -ms-transform: rotate(232deg);
  -o-transform: rotate(232deg);
  transform: rotate(232deg);
}
.wi-wind.towards-233-deg {
  -webkit-transform: rotate(233deg);
  -moz-transform: rotate(233deg);
  -ms-transform: rotate(233deg);
  -o-transform: rotate(233deg);
  transform: rotate(233deg);
}
.wi-wind.towards-234-deg {
  -webkit-transform: rotate(234deg);
  -moz-transform: rotate(234deg);
  -ms-transform: rotate(234deg);
  -o-transform: rotate(234deg);
  transform: rotate(234deg);
}
.wi-wind.towards-235-deg {
  -webkit-transform: rotate(235deg);
  -moz-transform: rotate(235deg);
  -ms-transform: rotate(235deg);
  -o-transform: rotate(235deg);
  transform: rotate(235deg);
}
.wi-wind.towards-236-deg {
  -webkit-transform: rotate(236deg);
  -moz-transform: rotate(236deg);
  -ms-transform: rotate(236deg);
  -o-transform: rotate(236deg);
  transform: rotate(236deg);
}
.wi-wind.towards-237-deg {
  -webkit-transform: rotate(237deg);
  -moz-transform: rotate(237deg);
  -ms-transform: rotate(237deg);
  -o-transform: rotate(237deg);
  transform: rotate(237deg);
}
.wi-wind.towards-238-deg {
  -webkit-transform: rotate(238deg);
  -moz-transform: rotate(238deg);
  -ms-transform: rotate(238deg);
  -o-transform: rotate(238deg);
  transform: rotate(238deg);
}
.wi-wind.towards-239-deg {
  -webkit-transform: rotate(239deg);
  -moz-transform: rotate(239deg);
  -ms-transform: rotate(239deg);
  -o-transform: rotate(239deg);
  transform: rotate(239deg);
}
.wi-wind.towards-240-deg {
  -webkit-transform: rotate(240deg);
  -moz-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  -o-transform: rotate(240deg);
  transform: rotate(240deg);
}
.wi-wind.towards-241-deg {
  -webkit-transform: rotate(241deg);
  -moz-transform: rotate(241deg);
  -ms-transform: rotate(241deg);
  -o-transform: rotate(241deg);
  transform: rotate(241deg);
}
.wi-wind.towards-242-deg {
  -webkit-transform: rotate(242deg);
  -moz-transform: rotate(242deg);
  -ms-transform: rotate(242deg);
  -o-transform: rotate(242deg);
  transform: rotate(242deg);
}
.wi-wind.towards-243-deg {
  -webkit-transform: rotate(243deg);
  -moz-transform: rotate(243deg);
  -ms-transform: rotate(243deg);
  -o-transform: rotate(243deg);
  transform: rotate(243deg);
}
.wi-wind.towards-244-deg {
  -webkit-transform: rotate(244deg);
  -moz-transform: rotate(244deg);
  -ms-transform: rotate(244deg);
  -o-transform: rotate(244deg);
  transform: rotate(244deg);
}
.wi-wind.towards-245-deg {
  -webkit-transform: rotate(245deg);
  -moz-transform: rotate(245deg);
  -ms-transform: rotate(245deg);
  -o-transform: rotate(245deg);
  transform: rotate(245deg);
}
.wi-wind.towards-246-deg {
  -webkit-transform: rotate(246deg);
  -moz-transform: rotate(246deg);
  -ms-transform: rotate(246deg);
  -o-transform: rotate(246deg);
  transform: rotate(246deg);
}
.wi-wind.towards-247-deg {
  -webkit-transform: rotate(247deg);
  -moz-transform: rotate(247deg);
  -ms-transform: rotate(247deg);
  -o-transform: rotate(247deg);
  transform: rotate(247deg);
}
.wi-wind.towards-248-deg {
  -webkit-transform: rotate(248deg);
  -moz-transform: rotate(248deg);
  -ms-transform: rotate(248deg);
  -o-transform: rotate(248deg);
  transform: rotate(248deg);
}
.wi-wind.towards-249-deg {
  -webkit-transform: rotate(249deg);
  -moz-transform: rotate(249deg);
  -ms-transform: rotate(249deg);
  -o-transform: rotate(249deg);
  transform: rotate(249deg);
}
.wi-wind.towards-250-deg {
  -webkit-transform: rotate(250deg);
  -moz-transform: rotate(250deg);
  -ms-transform: rotate(250deg);
  -o-transform: rotate(250deg);
  transform: rotate(250deg);
}
.wi-wind.towards-251-deg {
  -webkit-transform: rotate(251deg);
  -moz-transform: rotate(251deg);
  -ms-transform: rotate(251deg);
  -o-transform: rotate(251deg);
  transform: rotate(251deg);
}
.wi-wind.towards-252-deg {
  -webkit-transform: rotate(252deg);
  -moz-transform: rotate(252deg);
  -ms-transform: rotate(252deg);
  -o-transform: rotate(252deg);
  transform: rotate(252deg);
}
.wi-wind.towards-253-deg {
  -webkit-transform: rotate(253deg);
  -moz-transform: rotate(253deg);
  -ms-transform: rotate(253deg);
  -o-transform: rotate(253deg);
  transform: rotate(253deg);
}
.wi-wind.towards-254-deg {
  -webkit-transform: rotate(254deg);
  -moz-transform: rotate(254deg);
  -ms-transform: rotate(254deg);
  -o-transform: rotate(254deg);
  transform: rotate(254deg);
}
.wi-wind.towards-255-deg {
  -webkit-transform: rotate(255deg);
  -moz-transform: rotate(255deg);
  -ms-transform: rotate(255deg);
  -o-transform: rotate(255deg);
  transform: rotate(255deg);
}
.wi-wind.towards-256-deg {
  -webkit-transform: rotate(256deg);
  -moz-transform: rotate(256deg);
  -ms-transform: rotate(256deg);
  -o-transform: rotate(256deg);
  transform: rotate(256deg);
}
.wi-wind.towards-257-deg {
  -webkit-transform: rotate(257deg);
  -moz-transform: rotate(257deg);
  -ms-transform: rotate(257deg);
  -o-transform: rotate(257deg);
  transform: rotate(257deg);
}
.wi-wind.towards-258-deg {
  -webkit-transform: rotate(258deg);
  -moz-transform: rotate(258deg);
  -ms-transform: rotate(258deg);
  -o-transform: rotate(258deg);
  transform: rotate(258deg);
}
.wi-wind.towards-259-deg {
  -webkit-transform: rotate(259deg);
  -moz-transform: rotate(259deg);
  -ms-transform: rotate(259deg);
  -o-transform: rotate(259deg);
  transform: rotate(259deg);
}
.wi-wind.towards-260-deg {
  -webkit-transform: rotate(260deg);
  -moz-transform: rotate(260deg);
  -ms-transform: rotate(260deg);
  -o-transform: rotate(260deg);
  transform: rotate(260deg);
}
.wi-wind.towards-261-deg {
  -webkit-transform: rotate(261deg);
  -moz-transform: rotate(261deg);
  -ms-transform: rotate(261deg);
  -o-transform: rotate(261deg);
  transform: rotate(261deg);
}
.wi-wind.towards-262-deg {
  -webkit-transform: rotate(262deg);
  -moz-transform: rotate(262deg);
  -ms-transform: rotate(262deg);
  -o-transform: rotate(262deg);
  transform: rotate(262deg);
}
.wi-wind.towards-263-deg {
  -webkit-transform: rotate(263deg);
  -moz-transform: rotate(263deg);
  -ms-transform: rotate(263deg);
  -o-transform: rotate(263deg);
  transform: rotate(263deg);
}
.wi-wind.towards-264-deg {
  -webkit-transform: rotate(264deg);
  -moz-transform: rotate(264deg);
  -ms-transform: rotate(264deg);
  -o-transform: rotate(264deg);
  transform: rotate(264deg);
}
.wi-wind.towards-265-deg {
  -webkit-transform: rotate(265deg);
  -moz-transform: rotate(265deg);
  -ms-transform: rotate(265deg);
  -o-transform: rotate(265deg);
  transform: rotate(265deg);
}
.wi-wind.towards-266-deg {
  -webkit-transform: rotate(266deg);
  -moz-transform: rotate(266deg);
  -ms-transform: rotate(266deg);
  -o-transform: rotate(266deg);
  transform: rotate(266deg);
}
.wi-wind.towards-267-deg {
  -webkit-transform: rotate(267deg);
  -moz-transform: rotate(267deg);
  -ms-transform: rotate(267deg);
  -o-transform: rotate(267deg);
  transform: rotate(267deg);
}
.wi-wind.towards-268-deg {
  -webkit-transform: rotate(268deg);
  -moz-transform: rotate(268deg);
  -ms-transform: rotate(268deg);
  -o-transform: rotate(268deg);
  transform: rotate(268deg);
}
.wi-wind.towards-269-deg {
  -webkit-transform: rotate(269deg);
  -moz-transform: rotate(269deg);
  -ms-transform: rotate(269deg);
  -o-transform: rotate(269deg);
  transform: rotate(269deg);
}
.wi-wind.towards-270-deg {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}
.wi-wind.towards-271-deg {
  -webkit-transform: rotate(271deg);
  -moz-transform: rotate(271deg);
  -ms-transform: rotate(271deg);
  -o-transform: rotate(271deg);
  transform: rotate(271deg);
}
.wi-wind.towards-272-deg {
  -webkit-transform: rotate(272deg);
  -moz-transform: rotate(272deg);
  -ms-transform: rotate(272deg);
  -o-transform: rotate(272deg);
  transform: rotate(272deg);
}
.wi-wind.towards-273-deg {
  -webkit-transform: rotate(273deg);
  -moz-transform: rotate(273deg);
  -ms-transform: rotate(273deg);
  -o-transform: rotate(273deg);
  transform: rotate(273deg);
}
.wi-wind.towards-274-deg {
  -webkit-transform: rotate(274deg);
  -moz-transform: rotate(274deg);
  -ms-transform: rotate(274deg);
  -o-transform: rotate(274deg);
  transform: rotate(274deg);
}
.wi-wind.towards-275-deg {
  -webkit-transform: rotate(275deg);
  -moz-transform: rotate(275deg);
  -ms-transform: rotate(275deg);
  -o-transform: rotate(275deg);
  transform: rotate(275deg);
}
.wi-wind.towards-276-deg {
  -webkit-transform: rotate(276deg);
  -moz-transform: rotate(276deg);
  -ms-transform: rotate(276deg);
  -o-transform: rotate(276deg);
  transform: rotate(276deg);
}
.wi-wind.towards-277-deg {
  -webkit-transform: rotate(277deg);
  -moz-transform: rotate(277deg);
  -ms-transform: rotate(277deg);
  -o-transform: rotate(277deg);
  transform: rotate(277deg);
}
.wi-wind.towards-278-deg {
  -webkit-transform: rotate(278deg);
  -moz-transform: rotate(278deg);
  -ms-transform: rotate(278deg);
  -o-transform: rotate(278deg);
  transform: rotate(278deg);
}
.wi-wind.towards-279-deg {
  -webkit-transform: rotate(279deg);
  -moz-transform: rotate(279deg);
  -ms-transform: rotate(279deg);
  -o-transform: rotate(279deg);
  transform: rotate(279deg);
}
.wi-wind.towards-280-deg {
  -webkit-transform: rotate(280deg);
  -moz-transform: rotate(280deg);
  -ms-transform: rotate(280deg);
  -o-transform: rotate(280deg);
  transform: rotate(280deg);
}
.wi-wind.towards-281-deg {
  -webkit-transform: rotate(281deg);
  -moz-transform: rotate(281deg);
  -ms-transform: rotate(281deg);
  -o-transform: rotate(281deg);
  transform: rotate(281deg);
}
.wi-wind.towards-282-deg {
  -webkit-transform: rotate(282deg);
  -moz-transform: rotate(282deg);
  -ms-transform: rotate(282deg);
  -o-transform: rotate(282deg);
  transform: rotate(282deg);
}
.wi-wind.towards-283-deg {
  -webkit-transform: rotate(283deg);
  -moz-transform: rotate(283deg);
  -ms-transform: rotate(283deg);
  -o-transform: rotate(283deg);
  transform: rotate(283deg);
}
.wi-wind.towards-284-deg {
  -webkit-transform: rotate(284deg);
  -moz-transform: rotate(284deg);
  -ms-transform: rotate(284deg);
  -o-transform: rotate(284deg);
  transform: rotate(284deg);
}
.wi-wind.towards-285-deg {
  -webkit-transform: rotate(285deg);
  -moz-transform: rotate(285deg);
  -ms-transform: rotate(285deg);
  -o-transform: rotate(285deg);
  transform: rotate(285deg);
}
.wi-wind.towards-286-deg {
  -webkit-transform: rotate(286deg);
  -moz-transform: rotate(286deg);
  -ms-transform: rotate(286deg);
  -o-transform: rotate(286deg);
  transform: rotate(286deg);
}
.wi-wind.towards-287-deg {
  -webkit-transform: rotate(287deg);
  -moz-transform: rotate(287deg);
  -ms-transform: rotate(287deg);
  -o-transform: rotate(287deg);
  transform: rotate(287deg);
}
.wi-wind.towards-288-deg {
  -webkit-transform: rotate(288deg);
  -moz-transform: rotate(288deg);
  -ms-transform: rotate(288deg);
  -o-transform: rotate(288deg);
  transform: rotate(288deg);
}
.wi-wind.towards-289-deg {
  -webkit-transform: rotate(289deg);
  -moz-transform: rotate(289deg);
  -ms-transform: rotate(289deg);
  -o-transform: rotate(289deg);
  transform: rotate(289deg);
}
.wi-wind.towards-290-deg {
  -webkit-transform: rotate(290deg);
  -moz-transform: rotate(290deg);
  -ms-transform: rotate(290deg);
  -o-transform: rotate(290deg);
  transform: rotate(290deg);
}
.wi-wind.towards-291-deg {
  -webkit-transform: rotate(291deg);
  -moz-transform: rotate(291deg);
  -ms-transform: rotate(291deg);
  -o-transform: rotate(291deg);
  transform: rotate(291deg);
}
.wi-wind.towards-292-deg {
  -webkit-transform: rotate(292deg);
  -moz-transform: rotate(292deg);
  -ms-transform: rotate(292deg);
  -o-transform: rotate(292deg);
  transform: rotate(292deg);
}
.wi-wind.towards-293-deg {
  -webkit-transform: rotate(293deg);
  -moz-transform: rotate(293deg);
  -ms-transform: rotate(293deg);
  -o-transform: rotate(293deg);
  transform: rotate(293deg);
}
.wi-wind.towards-294-deg {
  -webkit-transform: rotate(294deg);
  -moz-transform: rotate(294deg);
  -ms-transform: rotate(294deg);
  -o-transform: rotate(294deg);
  transform: rotate(294deg);
}
.wi-wind.towards-295-deg {
  -webkit-transform: rotate(295deg);
  -moz-transform: rotate(295deg);
  -ms-transform: rotate(295deg);
  -o-transform: rotate(295deg);
  transform: rotate(295deg);
}
.wi-wind.towards-296-deg {
  -webkit-transform: rotate(296deg);
  -moz-transform: rotate(296deg);
  -ms-transform: rotate(296deg);
  -o-transform: rotate(296deg);
  transform: rotate(296deg);
}
.wi-wind.towards-297-deg {
  -webkit-transform: rotate(297deg);
  -moz-transform: rotate(297deg);
  -ms-transform: rotate(297deg);
  -o-transform: rotate(297deg);
  transform: rotate(297deg);
}
.wi-wind.towards-298-deg {
  -webkit-transform: rotate(298deg);
  -moz-transform: rotate(298deg);
  -ms-transform: rotate(298deg);
  -o-transform: rotate(298deg);
  transform: rotate(298deg);
}
.wi-wind.towards-299-deg {
  -webkit-transform: rotate(299deg);
  -moz-transform: rotate(299deg);
  -ms-transform: rotate(299deg);
  -o-transform: rotate(299deg);
  transform: rotate(299deg);
}
.wi-wind.towards-300-deg {
  -webkit-transform: rotate(300deg);
  -moz-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  -o-transform: rotate(300deg);
  transform: rotate(300deg);
}
.wi-wind.towards-301-deg {
  -webkit-transform: rotate(301deg);
  -moz-transform: rotate(301deg);
  -ms-transform: rotate(301deg);
  -o-transform: rotate(301deg);
  transform: rotate(301deg);
}
.wi-wind.towards-302-deg {
  -webkit-transform: rotate(302deg);
  -moz-transform: rotate(302deg);
  -ms-transform: rotate(302deg);
  -o-transform: rotate(302deg);
  transform: rotate(302deg);
}
.wi-wind.towards-303-deg {
  -webkit-transform: rotate(303deg);
  -moz-transform: rotate(303deg);
  -ms-transform: rotate(303deg);
  -o-transform: rotate(303deg);
  transform: rotate(303deg);
}
.wi-wind.towards-304-deg {
  -webkit-transform: rotate(304deg);
  -moz-transform: rotate(304deg);
  -ms-transform: rotate(304deg);
  -o-transform: rotate(304deg);
  transform: rotate(304deg);
}
.wi-wind.towards-305-deg {
  -webkit-transform: rotate(305deg);
  -moz-transform: rotate(305deg);
  -ms-transform: rotate(305deg);
  -o-transform: rotate(305deg);
  transform: rotate(305deg);
}
.wi-wind.towards-306-deg {
  -webkit-transform: rotate(306deg);
  -moz-transform: rotate(306deg);
  -ms-transform: rotate(306deg);
  -o-transform: rotate(306deg);
  transform: rotate(306deg);
}
.wi-wind.towards-307-deg {
  -webkit-transform: rotate(307deg);
  -moz-transform: rotate(307deg);
  -ms-transform: rotate(307deg);
  -o-transform: rotate(307deg);
  transform: rotate(307deg);
}
.wi-wind.towards-308-deg {
  -webkit-transform: rotate(308deg);
  -moz-transform: rotate(308deg);
  -ms-transform: rotate(308deg);
  -o-transform: rotate(308deg);
  transform: rotate(308deg);
}
.wi-wind.towards-309-deg {
  -webkit-transform: rotate(309deg);
  -moz-transform: rotate(309deg);
  -ms-transform: rotate(309deg);
  -o-transform: rotate(309deg);
  transform: rotate(309deg);
}
.wi-wind.towards-310-deg {
  -webkit-transform: rotate(310deg);
  -moz-transform: rotate(310deg);
  -ms-transform: rotate(310deg);
  -o-transform: rotate(310deg);
  transform: rotate(310deg);
}
.wi-wind.towards-311-deg {
  -webkit-transform: rotate(311deg);
  -moz-transform: rotate(311deg);
  -ms-transform: rotate(311deg);
  -o-transform: rotate(311deg);
  transform: rotate(311deg);
}
.wi-wind.towards-312-deg {
  -webkit-transform: rotate(312deg);
  -moz-transform: rotate(312deg);
  -ms-transform: rotate(312deg);
  -o-transform: rotate(312deg);
  transform: rotate(312deg);
}
.wi-wind.towards-313-deg {
  -webkit-transform: rotate(313deg);
  -moz-transform: rotate(313deg);
  -ms-transform: rotate(313deg);
  -o-transform: rotate(313deg);
  transform: rotate(313deg);
}
.wi-wind.towards-314-deg {
  -webkit-transform: rotate(314deg);
  -moz-transform: rotate(314deg);
  -ms-transform: rotate(314deg);
  -o-transform: rotate(314deg);
  transform: rotate(314deg);
}
.wi-wind.towards-315-deg {
  -webkit-transform: rotate(315deg);
  -moz-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  -o-transform: rotate(315deg);
  transform: rotate(315deg);
}
.wi-wind.towards-316-deg {
  -webkit-transform: rotate(316deg);
  -moz-transform: rotate(316deg);
  -ms-transform: rotate(316deg);
  -o-transform: rotate(316deg);
  transform: rotate(316deg);
}
.wi-wind.towards-317-deg {
  -webkit-transform: rotate(317deg);
  -moz-transform: rotate(317deg);
  -ms-transform: rotate(317deg);
  -o-transform: rotate(317deg);
  transform: rotate(317deg);
}
.wi-wind.towards-318-deg {
  -webkit-transform: rotate(318deg);
  -moz-transform: rotate(318deg);
  -ms-transform: rotate(318deg);
  -o-transform: rotate(318deg);
  transform: rotate(318deg);
}
.wi-wind.towards-319-deg {
  -webkit-transform: rotate(319deg);
  -moz-transform: rotate(319deg);
  -ms-transform: rotate(319deg);
  -o-transform: rotate(319deg);
  transform: rotate(319deg);
}
.wi-wind.towards-320-deg {
  -webkit-transform: rotate(320deg);
  -moz-transform: rotate(320deg);
  -ms-transform: rotate(320deg);
  -o-transform: rotate(320deg);
  transform: rotate(320deg);
}
.wi-wind.towards-321-deg {
  -webkit-transform: rotate(321deg);
  -moz-transform: rotate(321deg);
  -ms-transform: rotate(321deg);
  -o-transform: rotate(321deg);
  transform: rotate(321deg);
}
.wi-wind.towards-322-deg {
  -webkit-transform: rotate(322deg);
  -moz-transform: rotate(322deg);
  -ms-transform: rotate(322deg);
  -o-transform: rotate(322deg);
  transform: rotate(322deg);
}
.wi-wind.towards-323-deg {
  -webkit-transform: rotate(323deg);
  -moz-transform: rotate(323deg);
  -ms-transform: rotate(323deg);
  -o-transform: rotate(323deg);
  transform: rotate(323deg);
}
.wi-wind.towards-324-deg {
  -webkit-transform: rotate(324deg);
  -moz-transform: rotate(324deg);
  -ms-transform: rotate(324deg);
  -o-transform: rotate(324deg);
  transform: rotate(324deg);
}
.wi-wind.towards-325-deg {
  -webkit-transform: rotate(325deg);
  -moz-transform: rotate(325deg);
  -ms-transform: rotate(325deg);
  -o-transform: rotate(325deg);
  transform: rotate(325deg);
}
.wi-wind.towards-326-deg {
  -webkit-transform: rotate(326deg);
  -moz-transform: rotate(326deg);
  -ms-transform: rotate(326deg);
  -o-transform: rotate(326deg);
  transform: rotate(326deg);
}
.wi-wind.towards-327-deg {
  -webkit-transform: rotate(327deg);
  -moz-transform: rotate(327deg);
  -ms-transform: rotate(327deg);
  -o-transform: rotate(327deg);
  transform: rotate(327deg);
}
.wi-wind.towards-328-deg {
  -webkit-transform: rotate(328deg);
  -moz-transform: rotate(328deg);
  -ms-transform: rotate(328deg);
  -o-transform: rotate(328deg);
  transform: rotate(328deg);
}
.wi-wind.towards-329-deg {
  -webkit-transform: rotate(329deg);
  -moz-transform: rotate(329deg);
  -ms-transform: rotate(329deg);
  -o-transform: rotate(329deg);
  transform: rotate(329deg);
}
.wi-wind.towards-330-deg {
  -webkit-transform: rotate(330deg);
  -moz-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  -o-transform: rotate(330deg);
  transform: rotate(330deg);
}
.wi-wind.towards-331-deg {
  -webkit-transform: rotate(331deg);
  -moz-transform: rotate(331deg);
  -ms-transform: rotate(331deg);
  -o-transform: rotate(331deg);
  transform: rotate(331deg);
}
.wi-wind.towards-332-deg {
  -webkit-transform: rotate(332deg);
  -moz-transform: rotate(332deg);
  -ms-transform: rotate(332deg);
  -o-transform: rotate(332deg);
  transform: rotate(332deg);
}
.wi-wind.towards-333-deg {
  -webkit-transform: rotate(333deg);
  -moz-transform: rotate(333deg);
  -ms-transform: rotate(333deg);
  -o-transform: rotate(333deg);
  transform: rotate(333deg);
}
.wi-wind.towards-334-deg {
  -webkit-transform: rotate(334deg);
  -moz-transform: rotate(334deg);
  -ms-transform: rotate(334deg);
  -o-transform: rotate(334deg);
  transform: rotate(334deg);
}
.wi-wind.towards-335-deg {
  -webkit-transform: rotate(335deg);
  -moz-transform: rotate(335deg);
  -ms-transform: rotate(335deg);
  -o-transform: rotate(335deg);
  transform: rotate(335deg);
}
.wi-wind.towards-336-deg {
  -webkit-transform: rotate(336deg);
  -moz-transform: rotate(336deg);
  -ms-transform: rotate(336deg);
  -o-transform: rotate(336deg);
  transform: rotate(336deg);
}
.wi-wind.towards-337-deg {
  -webkit-transform: rotate(337deg);
  -moz-transform: rotate(337deg);
  -ms-transform: rotate(337deg);
  -o-transform: rotate(337deg);
  transform: rotate(337deg);
}
.wi-wind.towards-338-deg {
  -webkit-transform: rotate(338deg);
  -moz-transform: rotate(338deg);
  -ms-transform: rotate(338deg);
  -o-transform: rotate(338deg);
  transform: rotate(338deg);
}
.wi-wind.towards-339-deg {
  -webkit-transform: rotate(339deg);
  -moz-transform: rotate(339deg);
  -ms-transform: rotate(339deg);
  -o-transform: rotate(339deg);
  transform: rotate(339deg);
}
.wi-wind.towards-340-deg {
  -webkit-transform: rotate(340deg);
  -moz-transform: rotate(340deg);
  -ms-transform: rotate(340deg);
  -o-transform: rotate(340deg);
  transform: rotate(340deg);
}
.wi-wind.towards-341-deg {
  -webkit-transform: rotate(341deg);
  -moz-transform: rotate(341deg);
  -ms-transform: rotate(341deg);
  -o-transform: rotate(341deg);
  transform: rotate(341deg);
}
.wi-wind.towards-342-deg {
  -webkit-transform: rotate(342deg);
  -moz-transform: rotate(342deg);
  -ms-transform: rotate(342deg);
  -o-transform: rotate(342deg);
  transform: rotate(342deg);
}
.wi-wind.towards-343-deg {
  -webkit-transform: rotate(343deg);
  -moz-transform: rotate(343deg);
  -ms-transform: rotate(343deg);
  -o-transform: rotate(343deg);
  transform: rotate(343deg);
}
.wi-wind.towards-344-deg {
  -webkit-transform: rotate(344deg);
  -moz-transform: rotate(344deg);
  -ms-transform: rotate(344deg);
  -o-transform: rotate(344deg);
  transform: rotate(344deg);
}
.wi-wind.towards-345-deg {
  -webkit-transform: rotate(345deg);
  -moz-transform: rotate(345deg);
  -ms-transform: rotate(345deg);
  -o-transform: rotate(345deg);
  transform: rotate(345deg);
}
.wi-wind.towards-346-deg {
  -webkit-transform: rotate(346deg);
  -moz-transform: rotate(346deg);
  -ms-transform: rotate(346deg);
  -o-transform: rotate(346deg);
  transform: rotate(346deg);
}
.wi-wind.towards-347-deg {
  -webkit-transform: rotate(347deg);
  -moz-transform: rotate(347deg);
  -ms-transform: rotate(347deg);
  -o-transform: rotate(347deg);
  transform: rotate(347deg);
}
.wi-wind.towards-348-deg {
  -webkit-transform: rotate(348deg);
  -moz-transform: rotate(348deg);
  -ms-transform: rotate(348deg);
  -o-transform: rotate(348deg);
  transform: rotate(348deg);
}
.wi-wind.towards-349-deg {
  -webkit-transform: rotate(349deg);
  -moz-transform: rotate(349deg);
  -ms-transform: rotate(349deg);
  -o-transform: rotate(349deg);
  transform: rotate(349deg);
}
.wi-wind.towards-350-deg {
  -webkit-transform: rotate(350deg);
  -moz-transform: rotate(350deg);
  -ms-transform: rotate(350deg);
  -o-transform: rotate(350deg);
  transform: rotate(350deg);
}
.wi-wind.towards-351-deg {
  -webkit-transform: rotate(351deg);
  -moz-transform: rotate(351deg);
  -ms-transform: rotate(351deg);
  -o-transform: rotate(351deg);
  transform: rotate(351deg);
}
.wi-wind.towards-352-deg {
  -webkit-transform: rotate(352deg);
  -moz-transform: rotate(352deg);
  -ms-transform: rotate(352deg);
  -o-transform: rotate(352deg);
  transform: rotate(352deg);
}
.wi-wind.towards-353-deg {
  -webkit-transform: rotate(353deg);
  -moz-transform: rotate(353deg);
  -ms-transform: rotate(353deg);
  -o-transform: rotate(353deg);
  transform: rotate(353deg);
}
.wi-wind.towards-354-deg {
  -webkit-transform: rotate(354deg);
  -moz-transform: rotate(354deg);
  -ms-transform: rotate(354deg);
  -o-transform: rotate(354deg);
  transform: rotate(354deg);
}
.wi-wind.towards-355-deg {
  -webkit-transform: rotate(355deg);
  -moz-transform: rotate(355deg);
  -ms-transform: rotate(355deg);
  -o-transform: rotate(355deg);
  transform: rotate(355deg);
}
.wi-wind.towards-356-deg {
  -webkit-transform: rotate(356deg);
  -moz-transform: rotate(356deg);
  -ms-transform: rotate(356deg);
  -o-transform: rotate(356deg);
  transform: rotate(356deg);
}
.wi-wind.towards-357-deg {
  -webkit-transform: rotate(357deg);
  -moz-transform: rotate(357deg);
  -ms-transform: rotate(357deg);
  -o-transform: rotate(357deg);
  transform: rotate(357deg);
}
.wi-wind.towards-358-deg {
  -webkit-transform: rotate(358deg);
  -moz-transform: rotate(358deg);
  -ms-transform: rotate(358deg);
  -o-transform: rotate(358deg);
  transform: rotate(358deg);
}
.wi-wind.towards-359-deg {
  -webkit-transform: rotate(359deg);
  -moz-transform: rotate(359deg);
  -ms-transform: rotate(359deg);
  -o-transform: rotate(359deg);
  transform: rotate(359deg);
}
.wi-wind.towards-360-deg {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
.wi-wind.from-0-deg {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-wind.from-1-deg {
  -webkit-transform: rotate(181deg);
  -moz-transform: rotate(181deg);
  -ms-transform: rotate(181deg);
  -o-transform: rotate(181deg);
  transform: rotate(181deg);
}
.wi-wind.from-2-deg {
  -webkit-transform: rotate(182deg);
  -moz-transform: rotate(182deg);
  -ms-transform: rotate(182deg);
  -o-transform: rotate(182deg);
  transform: rotate(182deg);
}
.wi-wind.from-3-deg {
  -webkit-transform: rotate(183deg);
  -moz-transform: rotate(183deg);
  -ms-transform: rotate(183deg);
  -o-transform: rotate(183deg);
  transform: rotate(183deg);
}
.wi-wind.from-4-deg {
  -webkit-transform: rotate(184deg);
  -moz-transform: rotate(184deg);
  -ms-transform: rotate(184deg);
  -o-transform: rotate(184deg);
  transform: rotate(184deg);
}
.wi-wind.from-5-deg {
  -webkit-transform: rotate(185deg);
  -moz-transform: rotate(185deg);
  -ms-transform: rotate(185deg);
  -o-transform: rotate(185deg);
  transform: rotate(185deg);
}
.wi-wind.from-6-deg {
  -webkit-transform: rotate(186deg);
  -moz-transform: rotate(186deg);
  -ms-transform: rotate(186deg);
  -o-transform: rotate(186deg);
  transform: rotate(186deg);
}
.wi-wind.from-7-deg {
  -webkit-transform: rotate(187deg);
  -moz-transform: rotate(187deg);
  -ms-transform: rotate(187deg);
  -o-transform: rotate(187deg);
  transform: rotate(187deg);
}
.wi-wind.from-8-deg {
  -webkit-transform: rotate(188deg);
  -moz-transform: rotate(188deg);
  -ms-transform: rotate(188deg);
  -o-transform: rotate(188deg);
  transform: rotate(188deg);
}
.wi-wind.from-9-deg {
  -webkit-transform: rotate(189deg);
  -moz-transform: rotate(189deg);
  -ms-transform: rotate(189deg);
  -o-transform: rotate(189deg);
  transform: rotate(189deg);
}
.wi-wind.from-10-deg {
  -webkit-transform: rotate(190deg);
  -moz-transform: rotate(190deg);
  -ms-transform: rotate(190deg);
  -o-transform: rotate(190deg);
  transform: rotate(190deg);
}
.wi-wind.from-11-deg {
  -webkit-transform: rotate(191deg);
  -moz-transform: rotate(191deg);
  -ms-transform: rotate(191deg);
  -o-transform: rotate(191deg);
  transform: rotate(191deg);
}
.wi-wind.from-12-deg {
  -webkit-transform: rotate(192deg);
  -moz-transform: rotate(192deg);
  -ms-transform: rotate(192deg);
  -o-transform: rotate(192deg);
  transform: rotate(192deg);
}
.wi-wind.from-13-deg {
  -webkit-transform: rotate(193deg);
  -moz-transform: rotate(193deg);
  -ms-transform: rotate(193deg);
  -o-transform: rotate(193deg);
  transform: rotate(193deg);
}
.wi-wind.from-14-deg {
  -webkit-transform: rotate(194deg);
  -moz-transform: rotate(194deg);
  -ms-transform: rotate(194deg);
  -o-transform: rotate(194deg);
  transform: rotate(194deg);
}
.wi-wind.from-15-deg {
  -webkit-transform: rotate(195deg);
  -moz-transform: rotate(195deg);
  -ms-transform: rotate(195deg);
  -o-transform: rotate(195deg);
  transform: rotate(195deg);
}
.wi-wind.from-16-deg {
  -webkit-transform: rotate(196deg);
  -moz-transform: rotate(196deg);
  -ms-transform: rotate(196deg);
  -o-transform: rotate(196deg);
  transform: rotate(196deg);
}
.wi-wind.from-17-deg {
  -webkit-transform: rotate(197deg);
  -moz-transform: rotate(197deg);
  -ms-transform: rotate(197deg);
  -o-transform: rotate(197deg);
  transform: rotate(197deg);
}
.wi-wind.from-18-deg {
  -webkit-transform: rotate(198deg);
  -moz-transform: rotate(198deg);
  -ms-transform: rotate(198deg);
  -o-transform: rotate(198deg);
  transform: rotate(198deg);
}
.wi-wind.from-19-deg {
  -webkit-transform: rotate(199deg);
  -moz-transform: rotate(199deg);
  -ms-transform: rotate(199deg);
  -o-transform: rotate(199deg);
  transform: rotate(199deg);
}
.wi-wind.from-20-deg {
  -webkit-transform: rotate(200deg);
  -moz-transform: rotate(200deg);
  -ms-transform: rotate(200deg);
  -o-transform: rotate(200deg);
  transform: rotate(200deg);
}
.wi-wind.from-21-deg {
  -webkit-transform: rotate(201deg);
  -moz-transform: rotate(201deg);
  -ms-transform: rotate(201deg);
  -o-transform: rotate(201deg);
  transform: rotate(201deg);
}
.wi-wind.from-22-deg {
  -webkit-transform: rotate(202deg);
  -moz-transform: rotate(202deg);
  -ms-transform: rotate(202deg);
  -o-transform: rotate(202deg);
  transform: rotate(202deg);
}
.wi-wind.from-23-deg {
  -webkit-transform: rotate(203deg);
  -moz-transform: rotate(203deg);
  -ms-transform: rotate(203deg);
  -o-transform: rotate(203deg);
  transform: rotate(203deg);
}
.wi-wind.from-24-deg {
  -webkit-transform: rotate(204deg);
  -moz-transform: rotate(204deg);
  -ms-transform: rotate(204deg);
  -o-transform: rotate(204deg);
  transform: rotate(204deg);
}
.wi-wind.from-25-deg {
  -webkit-transform: rotate(205deg);
  -moz-transform: rotate(205deg);
  -ms-transform: rotate(205deg);
  -o-transform: rotate(205deg);
  transform: rotate(205deg);
}
.wi-wind.from-26-deg {
  -webkit-transform: rotate(206deg);
  -moz-transform: rotate(206deg);
  -ms-transform: rotate(206deg);
  -o-transform: rotate(206deg);
  transform: rotate(206deg);
}
.wi-wind.from-27-deg {
  -webkit-transform: rotate(207deg);
  -moz-transform: rotate(207deg);
  -ms-transform: rotate(207deg);
  -o-transform: rotate(207deg);
  transform: rotate(207deg);
}
.wi-wind.from-28-deg {
  -webkit-transform: rotate(208deg);
  -moz-transform: rotate(208deg);
  -ms-transform: rotate(208deg);
  -o-transform: rotate(208deg);
  transform: rotate(208deg);
}
.wi-wind.from-29-deg {
  -webkit-transform: rotate(209deg);
  -moz-transform: rotate(209deg);
  -ms-transform: rotate(209deg);
  -o-transform: rotate(209deg);
  transform: rotate(209deg);
}
.wi-wind.from-30-deg {
  -webkit-transform: rotate(210deg);
  -moz-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  -o-transform: rotate(210deg);
  transform: rotate(210deg);
}
.wi-wind.from-31-deg {
  -webkit-transform: rotate(211deg);
  -moz-transform: rotate(211deg);
  -ms-transform: rotate(211deg);
  -o-transform: rotate(211deg);
  transform: rotate(211deg);
}
.wi-wind.from-32-deg {
  -webkit-transform: rotate(212deg);
  -moz-transform: rotate(212deg);
  -ms-transform: rotate(212deg);
  -o-transform: rotate(212deg);
  transform: rotate(212deg);
}
.wi-wind.from-33-deg {
  -webkit-transform: rotate(213deg);
  -moz-transform: rotate(213deg);
  -ms-transform: rotate(213deg);
  -o-transform: rotate(213deg);
  transform: rotate(213deg);
}
.wi-wind.from-34-deg {
  -webkit-transform: rotate(214deg);
  -moz-transform: rotate(214deg);
  -ms-transform: rotate(214deg);
  -o-transform: rotate(214deg);
  transform: rotate(214deg);
}
.wi-wind.from-35-deg {
  -webkit-transform: rotate(215deg);
  -moz-transform: rotate(215deg);
  -ms-transform: rotate(215deg);
  -o-transform: rotate(215deg);
  transform: rotate(215deg);
}
.wi-wind.from-36-deg {
  -webkit-transform: rotate(216deg);
  -moz-transform: rotate(216deg);
  -ms-transform: rotate(216deg);
  -o-transform: rotate(216deg);
  transform: rotate(216deg);
}
.wi-wind.from-37-deg {
  -webkit-transform: rotate(217deg);
  -moz-transform: rotate(217deg);
  -ms-transform: rotate(217deg);
  -o-transform: rotate(217deg);
  transform: rotate(217deg);
}
.wi-wind.from-38-deg {
  -webkit-transform: rotate(218deg);
  -moz-transform: rotate(218deg);
  -ms-transform: rotate(218deg);
  -o-transform: rotate(218deg);
  transform: rotate(218deg);
}
.wi-wind.from-39-deg {
  -webkit-transform: rotate(219deg);
  -moz-transform: rotate(219deg);
  -ms-transform: rotate(219deg);
  -o-transform: rotate(219deg);
  transform: rotate(219deg);
}
.wi-wind.from-40-deg {
  -webkit-transform: rotate(220deg);
  -moz-transform: rotate(220deg);
  -ms-transform: rotate(220deg);
  -o-transform: rotate(220deg);
  transform: rotate(220deg);
}
.wi-wind.from-41-deg {
  -webkit-transform: rotate(221deg);
  -moz-transform: rotate(221deg);
  -ms-transform: rotate(221deg);
  -o-transform: rotate(221deg);
  transform: rotate(221deg);
}
.wi-wind.from-42-deg {
  -webkit-transform: rotate(222deg);
  -moz-transform: rotate(222deg);
  -ms-transform: rotate(222deg);
  -o-transform: rotate(222deg);
  transform: rotate(222deg);
}
.wi-wind.from-43-deg {
  -webkit-transform: rotate(223deg);
  -moz-transform: rotate(223deg);
  -ms-transform: rotate(223deg);
  -o-transform: rotate(223deg);
  transform: rotate(223deg);
}
.wi-wind.from-44-deg {
  -webkit-transform: rotate(224deg);
  -moz-transform: rotate(224deg);
  -ms-transform: rotate(224deg);
  -o-transform: rotate(224deg);
  transform: rotate(224deg);
}
.wi-wind.from-45-deg {
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  transform: rotate(225deg);
}
.wi-wind.from-46-deg {
  -webkit-transform: rotate(226deg);
  -moz-transform: rotate(226deg);
  -ms-transform: rotate(226deg);
  -o-transform: rotate(226deg);
  transform: rotate(226deg);
}
.wi-wind.from-47-deg {
  -webkit-transform: rotate(227deg);
  -moz-transform: rotate(227deg);
  -ms-transform: rotate(227deg);
  -o-transform: rotate(227deg);
  transform: rotate(227deg);
}
.wi-wind.from-48-deg {
  -webkit-transform: rotate(228deg);
  -moz-transform: rotate(228deg);
  -ms-transform: rotate(228deg);
  -o-transform: rotate(228deg);
  transform: rotate(228deg);
}
.wi-wind.from-49-deg {
  -webkit-transform: rotate(229deg);
  -moz-transform: rotate(229deg);
  -ms-transform: rotate(229deg);
  -o-transform: rotate(229deg);
  transform: rotate(229deg);
}
.wi-wind.from-50-deg {
  -webkit-transform: rotate(230deg);
  -moz-transform: rotate(230deg);
  -ms-transform: rotate(230deg);
  -o-transform: rotate(230deg);
  transform: rotate(230deg);
}
.wi-wind.from-51-deg {
  -webkit-transform: rotate(231deg);
  -moz-transform: rotate(231deg);
  -ms-transform: rotate(231deg);
  -o-transform: rotate(231deg);
  transform: rotate(231deg);
}
.wi-wind.from-52-deg {
  -webkit-transform: rotate(232deg);
  -moz-transform: rotate(232deg);
  -ms-transform: rotate(232deg);
  -o-transform: rotate(232deg);
  transform: rotate(232deg);
}
.wi-wind.from-53-deg {
  -webkit-transform: rotate(233deg);
  -moz-transform: rotate(233deg);
  -ms-transform: rotate(233deg);
  -o-transform: rotate(233deg);
  transform: rotate(233deg);
}
.wi-wind.from-54-deg {
  -webkit-transform: rotate(234deg);
  -moz-transform: rotate(234deg);
  -ms-transform: rotate(234deg);
  -o-transform: rotate(234deg);
  transform: rotate(234deg);
}
.wi-wind.from-55-deg {
  -webkit-transform: rotate(235deg);
  -moz-transform: rotate(235deg);
  -ms-transform: rotate(235deg);
  -o-transform: rotate(235deg);
  transform: rotate(235deg);
}
.wi-wind.from-56-deg {
  -webkit-transform: rotate(236deg);
  -moz-transform: rotate(236deg);
  -ms-transform: rotate(236deg);
  -o-transform: rotate(236deg);
  transform: rotate(236deg);
}
.wi-wind.from-57-deg {
  -webkit-transform: rotate(237deg);
  -moz-transform: rotate(237deg);
  -ms-transform: rotate(237deg);
  -o-transform: rotate(237deg);
  transform: rotate(237deg);
}
.wi-wind.from-58-deg {
  -webkit-transform: rotate(238deg);
  -moz-transform: rotate(238deg);
  -ms-transform: rotate(238deg);
  -o-transform: rotate(238deg);
  transform: rotate(238deg);
}
.wi-wind.from-59-deg {
  -webkit-transform: rotate(239deg);
  -moz-transform: rotate(239deg);
  -ms-transform: rotate(239deg);
  -o-transform: rotate(239deg);
  transform: rotate(239deg);
}
.wi-wind.from-60-deg {
  -webkit-transform: rotate(240deg);
  -moz-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  -o-transform: rotate(240deg);
  transform: rotate(240deg);
}
.wi-wind.from-61-deg {
  -webkit-transform: rotate(241deg);
  -moz-transform: rotate(241deg);
  -ms-transform: rotate(241deg);
  -o-transform: rotate(241deg);
  transform: rotate(241deg);
}
.wi-wind.from-62-deg {
  -webkit-transform: rotate(242deg);
  -moz-transform: rotate(242deg);
  -ms-transform: rotate(242deg);
  -o-transform: rotate(242deg);
  transform: rotate(242deg);
}
.wi-wind.from-63-deg {
  -webkit-transform: rotate(243deg);
  -moz-transform: rotate(243deg);
  -ms-transform: rotate(243deg);
  -o-transform: rotate(243deg);
  transform: rotate(243deg);
}
.wi-wind.from-64-deg {
  -webkit-transform: rotate(244deg);
  -moz-transform: rotate(244deg);
  -ms-transform: rotate(244deg);
  -o-transform: rotate(244deg);
  transform: rotate(244deg);
}
.wi-wind.from-65-deg {
  -webkit-transform: rotate(245deg);
  -moz-transform: rotate(245deg);
  -ms-transform: rotate(245deg);
  -o-transform: rotate(245deg);
  transform: rotate(245deg);
}
.wi-wind.from-66-deg {
  -webkit-transform: rotate(246deg);
  -moz-transform: rotate(246deg);
  -ms-transform: rotate(246deg);
  -o-transform: rotate(246deg);
  transform: rotate(246deg);
}
.wi-wind.from-67-deg {
  -webkit-transform: rotate(247deg);
  -moz-transform: rotate(247deg);
  -ms-transform: rotate(247deg);
  -o-transform: rotate(247deg);
  transform: rotate(247deg);
}
.wi-wind.from-68-deg {
  -webkit-transform: rotate(248deg);
  -moz-transform: rotate(248deg);
  -ms-transform: rotate(248deg);
  -o-transform: rotate(248deg);
  transform: rotate(248deg);
}
.wi-wind.from-69-deg {
  -webkit-transform: rotate(249deg);
  -moz-transform: rotate(249deg);
  -ms-transform: rotate(249deg);
  -o-transform: rotate(249deg);
  transform: rotate(249deg);
}
.wi-wind.from-70-deg {
  -webkit-transform: rotate(250deg);
  -moz-transform: rotate(250deg);
  -ms-transform: rotate(250deg);
  -o-transform: rotate(250deg);
  transform: rotate(250deg);
}
.wi-wind.from-71-deg {
  -webkit-transform: rotate(251deg);
  -moz-transform: rotate(251deg);
  -ms-transform: rotate(251deg);
  -o-transform: rotate(251deg);
  transform: rotate(251deg);
}
.wi-wind.from-72-deg {
  -webkit-transform: rotate(252deg);
  -moz-transform: rotate(252deg);
  -ms-transform: rotate(252deg);
  -o-transform: rotate(252deg);
  transform: rotate(252deg);
}
.wi-wind.from-73-deg {
  -webkit-transform: rotate(253deg);
  -moz-transform: rotate(253deg);
  -ms-transform: rotate(253deg);
  -o-transform: rotate(253deg);
  transform: rotate(253deg);
}
.wi-wind.from-74-deg {
  -webkit-transform: rotate(254deg);
  -moz-transform: rotate(254deg);
  -ms-transform: rotate(254deg);
  -o-transform: rotate(254deg);
  transform: rotate(254deg);
}
.wi-wind.from-75-deg {
  -webkit-transform: rotate(255deg);
  -moz-transform: rotate(255deg);
  -ms-transform: rotate(255deg);
  -o-transform: rotate(255deg);
  transform: rotate(255deg);
}
.wi-wind.from-76-deg {
  -webkit-transform: rotate(256deg);
  -moz-transform: rotate(256deg);
  -ms-transform: rotate(256deg);
  -o-transform: rotate(256deg);
  transform: rotate(256deg);
}
.wi-wind.from-77-deg {
  -webkit-transform: rotate(257deg);
  -moz-transform: rotate(257deg);
  -ms-transform: rotate(257deg);
  -o-transform: rotate(257deg);
  transform: rotate(257deg);
}
.wi-wind.from-78-deg {
  -webkit-transform: rotate(258deg);
  -moz-transform: rotate(258deg);
  -ms-transform: rotate(258deg);
  -o-transform: rotate(258deg);
  transform: rotate(258deg);
}
.wi-wind.from-79-deg {
  -webkit-transform: rotate(259deg);
  -moz-transform: rotate(259deg);
  -ms-transform: rotate(259deg);
  -o-transform: rotate(259deg);
  transform: rotate(259deg);
}
.wi-wind.from-80-deg {
  -webkit-transform: rotate(260deg);
  -moz-transform: rotate(260deg);
  -ms-transform: rotate(260deg);
  -o-transform: rotate(260deg);
  transform: rotate(260deg);
}
.wi-wind.from-81-deg {
  -webkit-transform: rotate(261deg);
  -moz-transform: rotate(261deg);
  -ms-transform: rotate(261deg);
  -o-transform: rotate(261deg);
  transform: rotate(261deg);
}
.wi-wind.from-82-deg {
  -webkit-transform: rotate(262deg);
  -moz-transform: rotate(262deg);
  -ms-transform: rotate(262deg);
  -o-transform: rotate(262deg);
  transform: rotate(262deg);
}
.wi-wind.from-83-deg {
  -webkit-transform: rotate(263deg);
  -moz-transform: rotate(263deg);
  -ms-transform: rotate(263deg);
  -o-transform: rotate(263deg);
  transform: rotate(263deg);
}
.wi-wind.from-84-deg {
  -webkit-transform: rotate(264deg);
  -moz-transform: rotate(264deg);
  -ms-transform: rotate(264deg);
  -o-transform: rotate(264deg);
  transform: rotate(264deg);
}
.wi-wind.from-85-deg {
  -webkit-transform: rotate(265deg);
  -moz-transform: rotate(265deg);
  -ms-transform: rotate(265deg);
  -o-transform: rotate(265deg);
  transform: rotate(265deg);
}
.wi-wind.from-86-deg {
  -webkit-transform: rotate(266deg);
  -moz-transform: rotate(266deg);
  -ms-transform: rotate(266deg);
  -o-transform: rotate(266deg);
  transform: rotate(266deg);
}
.wi-wind.from-87-deg {
  -webkit-transform: rotate(267deg);
  -moz-transform: rotate(267deg);
  -ms-transform: rotate(267deg);
  -o-transform: rotate(267deg);
  transform: rotate(267deg);
}
.wi-wind.from-88-deg {
  -webkit-transform: rotate(268deg);
  -moz-transform: rotate(268deg);
  -ms-transform: rotate(268deg);
  -o-transform: rotate(268deg);
  transform: rotate(268deg);
}
.wi-wind.from-89-deg {
  -webkit-transform: rotate(269deg);
  -moz-transform: rotate(269deg);
  -ms-transform: rotate(269deg);
  -o-transform: rotate(269deg);
  transform: rotate(269deg);
}
.wi-wind.from-90-deg {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}
.wi-wind.from-91-deg {
  -webkit-transform: rotate(271deg);
  -moz-transform: rotate(271deg);
  -ms-transform: rotate(271deg);
  -o-transform: rotate(271deg);
  transform: rotate(271deg);
}
.wi-wind.from-92-deg {
  -webkit-transform: rotate(272deg);
  -moz-transform: rotate(272deg);
  -ms-transform: rotate(272deg);
  -o-transform: rotate(272deg);
  transform: rotate(272deg);
}
.wi-wind.from-93-deg {
  -webkit-transform: rotate(273deg);
  -moz-transform: rotate(273deg);
  -ms-transform: rotate(273deg);
  -o-transform: rotate(273deg);
  transform: rotate(273deg);
}
.wi-wind.from-94-deg {
  -webkit-transform: rotate(274deg);
  -moz-transform: rotate(274deg);
  -ms-transform: rotate(274deg);
  -o-transform: rotate(274deg);
  transform: rotate(274deg);
}
.wi-wind.from-95-deg {
  -webkit-transform: rotate(275deg);
  -moz-transform: rotate(275deg);
  -ms-transform: rotate(275deg);
  -o-transform: rotate(275deg);
  transform: rotate(275deg);
}
.wi-wind.from-96-deg {
  -webkit-transform: rotate(276deg);
  -moz-transform: rotate(276deg);
  -ms-transform: rotate(276deg);
  -o-transform: rotate(276deg);
  transform: rotate(276deg);
}
.wi-wind.from-97-deg {
  -webkit-transform: rotate(277deg);
  -moz-transform: rotate(277deg);
  -ms-transform: rotate(277deg);
  -o-transform: rotate(277deg);
  transform: rotate(277deg);
}
.wi-wind.from-98-deg {
  -webkit-transform: rotate(278deg);
  -moz-transform: rotate(278deg);
  -ms-transform: rotate(278deg);
  -o-transform: rotate(278deg);
  transform: rotate(278deg);
}
.wi-wind.from-99-deg {
  -webkit-transform: rotate(279deg);
  -moz-transform: rotate(279deg);
  -ms-transform: rotate(279deg);
  -o-transform: rotate(279deg);
  transform: rotate(279deg);
}
.wi-wind.from-100-deg {
  -webkit-transform: rotate(280deg);
  -moz-transform: rotate(280deg);
  -ms-transform: rotate(280deg);
  -o-transform: rotate(280deg);
  transform: rotate(280deg);
}
.wi-wind.from-101-deg {
  -webkit-transform: rotate(281deg);
  -moz-transform: rotate(281deg);
  -ms-transform: rotate(281deg);
  -o-transform: rotate(281deg);
  transform: rotate(281deg);
}
.wi-wind.from-102-deg {
  -webkit-transform: rotate(282deg);
  -moz-transform: rotate(282deg);
  -ms-transform: rotate(282deg);
  -o-transform: rotate(282deg);
  transform: rotate(282deg);
}
.wi-wind.from-103-deg {
  -webkit-transform: rotate(283deg);
  -moz-transform: rotate(283deg);
  -ms-transform: rotate(283deg);
  -o-transform: rotate(283deg);
  transform: rotate(283deg);
}
.wi-wind.from-104-deg {
  -webkit-transform: rotate(284deg);
  -moz-transform: rotate(284deg);
  -ms-transform: rotate(284deg);
  -o-transform: rotate(284deg);
  transform: rotate(284deg);
}
.wi-wind.from-105-deg {
  -webkit-transform: rotate(285deg);
  -moz-transform: rotate(285deg);
  -ms-transform: rotate(285deg);
  -o-transform: rotate(285deg);
  transform: rotate(285deg);
}
.wi-wind.from-106-deg {
  -webkit-transform: rotate(286deg);
  -moz-transform: rotate(286deg);
  -ms-transform: rotate(286deg);
  -o-transform: rotate(286deg);
  transform: rotate(286deg);
}
.wi-wind.from-107-deg {
  -webkit-transform: rotate(287deg);
  -moz-transform: rotate(287deg);
  -ms-transform: rotate(287deg);
  -o-transform: rotate(287deg);
  transform: rotate(287deg);
}
.wi-wind.from-108-deg {
  -webkit-transform: rotate(288deg);
  -moz-transform: rotate(288deg);
  -ms-transform: rotate(288deg);
  -o-transform: rotate(288deg);
  transform: rotate(288deg);
}
.wi-wind.from-109-deg {
  -webkit-transform: rotate(289deg);
  -moz-transform: rotate(289deg);
  -ms-transform: rotate(289deg);
  -o-transform: rotate(289deg);
  transform: rotate(289deg);
}
.wi-wind.from-110-deg {
  -webkit-transform: rotate(290deg);
  -moz-transform: rotate(290deg);
  -ms-transform: rotate(290deg);
  -o-transform: rotate(290deg);
  transform: rotate(290deg);
}
.wi-wind.from-111-deg {
  -webkit-transform: rotate(291deg);
  -moz-transform: rotate(291deg);
  -ms-transform: rotate(291deg);
  -o-transform: rotate(291deg);
  transform: rotate(291deg);
}
.wi-wind.from-112-deg {
  -webkit-transform: rotate(292deg);
  -moz-transform: rotate(292deg);
  -ms-transform: rotate(292deg);
  -o-transform: rotate(292deg);
  transform: rotate(292deg);
}
.wi-wind.from-113-deg {
  -webkit-transform: rotate(293deg);
  -moz-transform: rotate(293deg);
  -ms-transform: rotate(293deg);
  -o-transform: rotate(293deg);
  transform: rotate(293deg);
}
.wi-wind.from-114-deg {
  -webkit-transform: rotate(294deg);
  -moz-transform: rotate(294deg);
  -ms-transform: rotate(294deg);
  -o-transform: rotate(294deg);
  transform: rotate(294deg);
}
.wi-wind.from-115-deg {
  -webkit-transform: rotate(295deg);
  -moz-transform: rotate(295deg);
  -ms-transform: rotate(295deg);
  -o-transform: rotate(295deg);
  transform: rotate(295deg);
}
.wi-wind.from-116-deg {
  -webkit-transform: rotate(296deg);
  -moz-transform: rotate(296deg);
  -ms-transform: rotate(296deg);
  -o-transform: rotate(296deg);
  transform: rotate(296deg);
}
.wi-wind.from-117-deg {
  -webkit-transform: rotate(297deg);
  -moz-transform: rotate(297deg);
  -ms-transform: rotate(297deg);
  -o-transform: rotate(297deg);
  transform: rotate(297deg);
}
.wi-wind.from-118-deg {
  -webkit-transform: rotate(298deg);
  -moz-transform: rotate(298deg);
  -ms-transform: rotate(298deg);
  -o-transform: rotate(298deg);
  transform: rotate(298deg);
}
.wi-wind.from-119-deg {
  -webkit-transform: rotate(299deg);
  -moz-transform: rotate(299deg);
  -ms-transform: rotate(299deg);
  -o-transform: rotate(299deg);
  transform: rotate(299deg);
}
.wi-wind.from-120-deg {
  -webkit-transform: rotate(300deg);
  -moz-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  -o-transform: rotate(300deg);
  transform: rotate(300deg);
}
.wi-wind.from-121-deg {
  -webkit-transform: rotate(301deg);
  -moz-transform: rotate(301deg);
  -ms-transform: rotate(301deg);
  -o-transform: rotate(301deg);
  transform: rotate(301deg);
}
.wi-wind.from-122-deg {
  -webkit-transform: rotate(302deg);
  -moz-transform: rotate(302deg);
  -ms-transform: rotate(302deg);
  -o-transform: rotate(302deg);
  transform: rotate(302deg);
}
.wi-wind.from-123-deg {
  -webkit-transform: rotate(303deg);
  -moz-transform: rotate(303deg);
  -ms-transform: rotate(303deg);
  -o-transform: rotate(303deg);
  transform: rotate(303deg);
}
.wi-wind.from-124-deg {
  -webkit-transform: rotate(304deg);
  -moz-transform: rotate(304deg);
  -ms-transform: rotate(304deg);
  -o-transform: rotate(304deg);
  transform: rotate(304deg);
}
.wi-wind.from-125-deg {
  -webkit-transform: rotate(305deg);
  -moz-transform: rotate(305deg);
  -ms-transform: rotate(305deg);
  -o-transform: rotate(305deg);
  transform: rotate(305deg);
}
.wi-wind.from-126-deg {
  -webkit-transform: rotate(306deg);
  -moz-transform: rotate(306deg);
  -ms-transform: rotate(306deg);
  -o-transform: rotate(306deg);
  transform: rotate(306deg);
}
.wi-wind.from-127-deg {
  -webkit-transform: rotate(307deg);
  -moz-transform: rotate(307deg);
  -ms-transform: rotate(307deg);
  -o-transform: rotate(307deg);
  transform: rotate(307deg);
}
.wi-wind.from-128-deg {
  -webkit-transform: rotate(308deg);
  -moz-transform: rotate(308deg);
  -ms-transform: rotate(308deg);
  -o-transform: rotate(308deg);
  transform: rotate(308deg);
}
.wi-wind.from-129-deg {
  -webkit-transform: rotate(309deg);
  -moz-transform: rotate(309deg);
  -ms-transform: rotate(309deg);
  -o-transform: rotate(309deg);
  transform: rotate(309deg);
}
.wi-wind.from-130-deg {
  -webkit-transform: rotate(310deg);
  -moz-transform: rotate(310deg);
  -ms-transform: rotate(310deg);
  -o-transform: rotate(310deg);
  transform: rotate(310deg);
}
.wi-wind.from-131-deg {
  -webkit-transform: rotate(311deg);
  -moz-transform: rotate(311deg);
  -ms-transform: rotate(311deg);
  -o-transform: rotate(311deg);
  transform: rotate(311deg);
}
.wi-wind.from-132-deg {
  -webkit-transform: rotate(312deg);
  -moz-transform: rotate(312deg);
  -ms-transform: rotate(312deg);
  -o-transform: rotate(312deg);
  transform: rotate(312deg);
}
.wi-wind.from-133-deg {
  -webkit-transform: rotate(313deg);
  -moz-transform: rotate(313deg);
  -ms-transform: rotate(313deg);
  -o-transform: rotate(313deg);
  transform: rotate(313deg);
}
.wi-wind.from-134-deg {
  -webkit-transform: rotate(314deg);
  -moz-transform: rotate(314deg);
  -ms-transform: rotate(314deg);
  -o-transform: rotate(314deg);
  transform: rotate(314deg);
}
.wi-wind.from-135-deg {
  -webkit-transform: rotate(315deg);
  -moz-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  -o-transform: rotate(315deg);
  transform: rotate(315deg);
}
.wi-wind.from-136-deg {
  -webkit-transform: rotate(316deg);
  -moz-transform: rotate(316deg);
  -ms-transform: rotate(316deg);
  -o-transform: rotate(316deg);
  transform: rotate(316deg);
}
.wi-wind.from-137-deg {
  -webkit-transform: rotate(317deg);
  -moz-transform: rotate(317deg);
  -ms-transform: rotate(317deg);
  -o-transform: rotate(317deg);
  transform: rotate(317deg);
}
.wi-wind.from-138-deg {
  -webkit-transform: rotate(318deg);
  -moz-transform: rotate(318deg);
  -ms-transform: rotate(318deg);
  -o-transform: rotate(318deg);
  transform: rotate(318deg);
}
.wi-wind.from-139-deg {
  -webkit-transform: rotate(319deg);
  -moz-transform: rotate(319deg);
  -ms-transform: rotate(319deg);
  -o-transform: rotate(319deg);
  transform: rotate(319deg);
}
.wi-wind.from-140-deg {
  -webkit-transform: rotate(320deg);
  -moz-transform: rotate(320deg);
  -ms-transform: rotate(320deg);
  -o-transform: rotate(320deg);
  transform: rotate(320deg);
}
.wi-wind.from-141-deg {
  -webkit-transform: rotate(321deg);
  -moz-transform: rotate(321deg);
  -ms-transform: rotate(321deg);
  -o-transform: rotate(321deg);
  transform: rotate(321deg);
}
.wi-wind.from-142-deg {
  -webkit-transform: rotate(322deg);
  -moz-transform: rotate(322deg);
  -ms-transform: rotate(322deg);
  -o-transform: rotate(322deg);
  transform: rotate(322deg);
}
.wi-wind.from-143-deg {
  -webkit-transform: rotate(323deg);
  -moz-transform: rotate(323deg);
  -ms-transform: rotate(323deg);
  -o-transform: rotate(323deg);
  transform: rotate(323deg);
}
.wi-wind.from-144-deg {
  -webkit-transform: rotate(324deg);
  -moz-transform: rotate(324deg);
  -ms-transform: rotate(324deg);
  -o-transform: rotate(324deg);
  transform: rotate(324deg);
}
.wi-wind.from-145-deg {
  -webkit-transform: rotate(325deg);
  -moz-transform: rotate(325deg);
  -ms-transform: rotate(325deg);
  -o-transform: rotate(325deg);
  transform: rotate(325deg);
}
.wi-wind.from-146-deg {
  -webkit-transform: rotate(326deg);
  -moz-transform: rotate(326deg);
  -ms-transform: rotate(326deg);
  -o-transform: rotate(326deg);
  transform: rotate(326deg);
}
.wi-wind.from-147-deg {
  -webkit-transform: rotate(327deg);
  -moz-transform: rotate(327deg);
  -ms-transform: rotate(327deg);
  -o-transform: rotate(327deg);
  transform: rotate(327deg);
}
.wi-wind.from-148-deg {
  -webkit-transform: rotate(328deg);
  -moz-transform: rotate(328deg);
  -ms-transform: rotate(328deg);
  -o-transform: rotate(328deg);
  transform: rotate(328deg);
}
.wi-wind.from-149-deg {
  -webkit-transform: rotate(329deg);
  -moz-transform: rotate(329deg);
  -ms-transform: rotate(329deg);
  -o-transform: rotate(329deg);
  transform: rotate(329deg);
}
.wi-wind.from-150-deg {
  -webkit-transform: rotate(330deg);
  -moz-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  -o-transform: rotate(330deg);
  transform: rotate(330deg);
}
.wi-wind.from-151-deg {
  -webkit-transform: rotate(331deg);
  -moz-transform: rotate(331deg);
  -ms-transform: rotate(331deg);
  -o-transform: rotate(331deg);
  transform: rotate(331deg);
}
.wi-wind.from-152-deg {
  -webkit-transform: rotate(332deg);
  -moz-transform: rotate(332deg);
  -ms-transform: rotate(332deg);
  -o-transform: rotate(332deg);
  transform: rotate(332deg);
}
.wi-wind.from-153-deg {
  -webkit-transform: rotate(333deg);
  -moz-transform: rotate(333deg);
  -ms-transform: rotate(333deg);
  -o-transform: rotate(333deg);
  transform: rotate(333deg);
}
.wi-wind.from-154-deg {
  -webkit-transform: rotate(334deg);
  -moz-transform: rotate(334deg);
  -ms-transform: rotate(334deg);
  -o-transform: rotate(334deg);
  transform: rotate(334deg);
}
.wi-wind.from-155-deg {
  -webkit-transform: rotate(335deg);
  -moz-transform: rotate(335deg);
  -ms-transform: rotate(335deg);
  -o-transform: rotate(335deg);
  transform: rotate(335deg);
}
.wi-wind.from-156-deg {
  -webkit-transform: rotate(336deg);
  -moz-transform: rotate(336deg);
  -ms-transform: rotate(336deg);
  -o-transform: rotate(336deg);
  transform: rotate(336deg);
}
.wi-wind.from-157-deg {
  -webkit-transform: rotate(337deg);
  -moz-transform: rotate(337deg);
  -ms-transform: rotate(337deg);
  -o-transform: rotate(337deg);
  transform: rotate(337deg);
}
.wi-wind.from-158-deg {
  -webkit-transform: rotate(338deg);
  -moz-transform: rotate(338deg);
  -ms-transform: rotate(338deg);
  -o-transform: rotate(338deg);
  transform: rotate(338deg);
}
.wi-wind.from-159-deg {
  -webkit-transform: rotate(339deg);
  -moz-transform: rotate(339deg);
  -ms-transform: rotate(339deg);
  -o-transform: rotate(339deg);
  transform: rotate(339deg);
}
.wi-wind.from-160-deg {
  -webkit-transform: rotate(340deg);
  -moz-transform: rotate(340deg);
  -ms-transform: rotate(340deg);
  -o-transform: rotate(340deg);
  transform: rotate(340deg);
}
.wi-wind.from-161-deg {
  -webkit-transform: rotate(341deg);
  -moz-transform: rotate(341deg);
  -ms-transform: rotate(341deg);
  -o-transform: rotate(341deg);
  transform: rotate(341deg);
}
.wi-wind.from-162-deg {
  -webkit-transform: rotate(342deg);
  -moz-transform: rotate(342deg);
  -ms-transform: rotate(342deg);
  -o-transform: rotate(342deg);
  transform: rotate(342deg);
}
.wi-wind.from-163-deg {
  -webkit-transform: rotate(343deg);
  -moz-transform: rotate(343deg);
  -ms-transform: rotate(343deg);
  -o-transform: rotate(343deg);
  transform: rotate(343deg);
}
.wi-wind.from-164-deg {
  -webkit-transform: rotate(344deg);
  -moz-transform: rotate(344deg);
  -ms-transform: rotate(344deg);
  -o-transform: rotate(344deg);
  transform: rotate(344deg);
}
.wi-wind.from-165-deg {
  -webkit-transform: rotate(345deg);
  -moz-transform: rotate(345deg);
  -ms-transform: rotate(345deg);
  -o-transform: rotate(345deg);
  transform: rotate(345deg);
}
.wi-wind.from-166-deg {
  -webkit-transform: rotate(346deg);
  -moz-transform: rotate(346deg);
  -ms-transform: rotate(346deg);
  -o-transform: rotate(346deg);
  transform: rotate(346deg);
}
.wi-wind.from-167-deg {
  -webkit-transform: rotate(347deg);
  -moz-transform: rotate(347deg);
  -ms-transform: rotate(347deg);
  -o-transform: rotate(347deg);
  transform: rotate(347deg);
}
.wi-wind.from-168-deg {
  -webkit-transform: rotate(348deg);
  -moz-transform: rotate(348deg);
  -ms-transform: rotate(348deg);
  -o-transform: rotate(348deg);
  transform: rotate(348deg);
}
.wi-wind.from-169-deg {
  -webkit-transform: rotate(349deg);
  -moz-transform: rotate(349deg);
  -ms-transform: rotate(349deg);
  -o-transform: rotate(349deg);
  transform: rotate(349deg);
}
.wi-wind.from-170-deg {
  -webkit-transform: rotate(350deg);
  -moz-transform: rotate(350deg);
  -ms-transform: rotate(350deg);
  -o-transform: rotate(350deg);
  transform: rotate(350deg);
}
.wi-wind.from-171-deg {
  -webkit-transform: rotate(351deg);
  -moz-transform: rotate(351deg);
  -ms-transform: rotate(351deg);
  -o-transform: rotate(351deg);
  transform: rotate(351deg);
}
.wi-wind.from-172-deg {
  -webkit-transform: rotate(352deg);
  -moz-transform: rotate(352deg);
  -ms-transform: rotate(352deg);
  -o-transform: rotate(352deg);
  transform: rotate(352deg);
}
.wi-wind.from-173-deg {
  -webkit-transform: rotate(353deg);
  -moz-transform: rotate(353deg);
  -ms-transform: rotate(353deg);
  -o-transform: rotate(353deg);
  transform: rotate(353deg);
}
.wi-wind.from-174-deg {
  -webkit-transform: rotate(354deg);
  -moz-transform: rotate(354deg);
  -ms-transform: rotate(354deg);
  -o-transform: rotate(354deg);
  transform: rotate(354deg);
}
.wi-wind.from-175-deg {
  -webkit-transform: rotate(355deg);
  -moz-transform: rotate(355deg);
  -ms-transform: rotate(355deg);
  -o-transform: rotate(355deg);
  transform: rotate(355deg);
}
.wi-wind.from-176-deg {
  -webkit-transform: rotate(356deg);
  -moz-transform: rotate(356deg);
  -ms-transform: rotate(356deg);
  -o-transform: rotate(356deg);
  transform: rotate(356deg);
}
.wi-wind.from-177-deg {
  -webkit-transform: rotate(357deg);
  -moz-transform: rotate(357deg);
  -ms-transform: rotate(357deg);
  -o-transform: rotate(357deg);
  transform: rotate(357deg);
}
.wi-wind.from-178-deg {
  -webkit-transform: rotate(358deg);
  -moz-transform: rotate(358deg);
  -ms-transform: rotate(358deg);
  -o-transform: rotate(358deg);
  transform: rotate(358deg);
}
.wi-wind.from-179-deg {
  -webkit-transform: rotate(359deg);
  -moz-transform: rotate(359deg);
  -ms-transform: rotate(359deg);
  -o-transform: rotate(359deg);
  transform: rotate(359deg);
}
.wi-wind.from-180-deg {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
.wi-wind.from-181-deg {
  -webkit-transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  -ms-transform: rotate(1deg);
  -o-transform: rotate(1deg);
  transform: rotate(1deg);
}
.wi-wind.from-182-deg {
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  transform: rotate(2deg);
}
.wi-wind.from-183-deg {
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  transform: rotate(3deg);
}
.wi-wind.from-184-deg {
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  -o-transform: rotate(4deg);
  transform: rotate(4deg);
}
.wi-wind.from-185-deg {
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
}
.wi-wind.from-186-deg {
  -webkit-transform: rotate(6deg);
  -moz-transform: rotate(6deg);
  -ms-transform: rotate(6deg);
  -o-transform: rotate(6deg);
  transform: rotate(6deg);
}
.wi-wind.from-187-deg {
  -webkit-transform: rotate(7deg);
  -moz-transform: rotate(7deg);
  -ms-transform: rotate(7deg);
  -o-transform: rotate(7deg);
  transform: rotate(7deg);
}
.wi-wind.from-188-deg {
  -webkit-transform: rotate(8deg);
  -moz-transform: rotate(8deg);
  -ms-transform: rotate(8deg);
  -o-transform: rotate(8deg);
  transform: rotate(8deg);
}
.wi-wind.from-189-deg {
  -webkit-transform: rotate(9deg);
  -moz-transform: rotate(9deg);
  -ms-transform: rotate(9deg);
  -o-transform: rotate(9deg);
  transform: rotate(9deg);
}
.wi-wind.from-190-deg {
  -webkit-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  -o-transform: rotate(10deg);
  transform: rotate(10deg);
}
.wi-wind.from-191-deg {
  -webkit-transform: rotate(11deg);
  -moz-transform: rotate(11deg);
  -ms-transform: rotate(11deg);
  -o-transform: rotate(11deg);
  transform: rotate(11deg);
}
.wi-wind.from-192-deg {
  -webkit-transform: rotate(12deg);
  -moz-transform: rotate(12deg);
  -ms-transform: rotate(12deg);
  -o-transform: rotate(12deg);
  transform: rotate(12deg);
}
.wi-wind.from-193-deg {
  -webkit-transform: rotate(13deg);
  -moz-transform: rotate(13deg);
  -ms-transform: rotate(13deg);
  -o-transform: rotate(13deg);
  transform: rotate(13deg);
}
.wi-wind.from-194-deg {
  -webkit-transform: rotate(14deg);
  -moz-transform: rotate(14deg);
  -ms-transform: rotate(14deg);
  -o-transform: rotate(14deg);
  transform: rotate(14deg);
}
.wi-wind.from-195-deg {
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  transform: rotate(15deg);
}
.wi-wind.from-196-deg {
  -webkit-transform: rotate(16deg);
  -moz-transform: rotate(16deg);
  -ms-transform: rotate(16deg);
  -o-transform: rotate(16deg);
  transform: rotate(16deg);
}
.wi-wind.from-197-deg {
  -webkit-transform: rotate(17deg);
  -moz-transform: rotate(17deg);
  -ms-transform: rotate(17deg);
  -o-transform: rotate(17deg);
  transform: rotate(17deg);
}
.wi-wind.from-198-deg {
  -webkit-transform: rotate(18deg);
  -moz-transform: rotate(18deg);
  -ms-transform: rotate(18deg);
  -o-transform: rotate(18deg);
  transform: rotate(18deg);
}
.wi-wind.from-199-deg {
  -webkit-transform: rotate(19deg);
  -moz-transform: rotate(19deg);
  -ms-transform: rotate(19deg);
  -o-transform: rotate(19deg);
  transform: rotate(19deg);
}
.wi-wind.from-200-deg {
  -webkit-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  -o-transform: rotate(20deg);
  transform: rotate(20deg);
}
.wi-wind.from-201-deg {
  -webkit-transform: rotate(21deg);
  -moz-transform: rotate(21deg);
  -ms-transform: rotate(21deg);
  -o-transform: rotate(21deg);
  transform: rotate(21deg);
}
.wi-wind.from-202-deg {
  -webkit-transform: rotate(22deg);
  -moz-transform: rotate(22deg);
  -ms-transform: rotate(22deg);
  -o-transform: rotate(22deg);
  transform: rotate(22deg);
}
.wi-wind.from-203-deg {
  -webkit-transform: rotate(23deg);
  -moz-transform: rotate(23deg);
  -ms-transform: rotate(23deg);
  -o-transform: rotate(23deg);
  transform: rotate(23deg);
}
.wi-wind.from-204-deg {
  -webkit-transform: rotate(24deg);
  -moz-transform: rotate(24deg);
  -ms-transform: rotate(24deg);
  -o-transform: rotate(24deg);
  transform: rotate(24deg);
}
.wi-wind.from-205-deg {
  -webkit-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);
}
.wi-wind.from-206-deg {
  -webkit-transform: rotate(26deg);
  -moz-transform: rotate(26deg);
  -ms-transform: rotate(26deg);
  -o-transform: rotate(26deg);
  transform: rotate(26deg);
}
.wi-wind.from-207-deg {
  -webkit-transform: rotate(27deg);
  -moz-transform: rotate(27deg);
  -ms-transform: rotate(27deg);
  -o-transform: rotate(27deg);
  transform: rotate(27deg);
}
.wi-wind.from-208-deg {
  -webkit-transform: rotate(28deg);
  -moz-transform: rotate(28deg);
  -ms-transform: rotate(28deg);
  -o-transform: rotate(28deg);
  transform: rotate(28deg);
}
.wi-wind.from-209-deg {
  -webkit-transform: rotate(29deg);
  -moz-transform: rotate(29deg);
  -ms-transform: rotate(29deg);
  -o-transform: rotate(29deg);
  transform: rotate(29deg);
}
.wi-wind.from-210-deg {
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}
.wi-wind.from-211-deg {
  -webkit-transform: rotate(31deg);
  -moz-transform: rotate(31deg);
  -ms-transform: rotate(31deg);
  -o-transform: rotate(31deg);
  transform: rotate(31deg);
}
.wi-wind.from-212-deg {
  -webkit-transform: rotate(32deg);
  -moz-transform: rotate(32deg);
  -ms-transform: rotate(32deg);
  -o-transform: rotate(32deg);
  transform: rotate(32deg);
}
.wi-wind.from-213-deg {
  -webkit-transform: rotate(33deg);
  -moz-transform: rotate(33deg);
  -ms-transform: rotate(33deg);
  -o-transform: rotate(33deg);
  transform: rotate(33deg);
}
.wi-wind.from-214-deg {
  -webkit-transform: rotate(34deg);
  -moz-transform: rotate(34deg);
  -ms-transform: rotate(34deg);
  -o-transform: rotate(34deg);
  transform: rotate(34deg);
}
.wi-wind.from-215-deg {
  -webkit-transform: rotate(35deg);
  -moz-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  -o-transform: rotate(35deg);
  transform: rotate(35deg);
}
.wi-wind.from-216-deg {
  -webkit-transform: rotate(36deg);
  -moz-transform: rotate(36deg);
  -ms-transform: rotate(36deg);
  -o-transform: rotate(36deg);
  transform: rotate(36deg);
}
.wi-wind.from-217-deg {
  -webkit-transform: rotate(37deg);
  -moz-transform: rotate(37deg);
  -ms-transform: rotate(37deg);
  -o-transform: rotate(37deg);
  transform: rotate(37deg);
}
.wi-wind.from-218-deg {
  -webkit-transform: rotate(38deg);
  -moz-transform: rotate(38deg);
  -ms-transform: rotate(38deg);
  -o-transform: rotate(38deg);
  transform: rotate(38deg);
}
.wi-wind.from-219-deg {
  -webkit-transform: rotate(39deg);
  -moz-transform: rotate(39deg);
  -ms-transform: rotate(39deg);
  -o-transform: rotate(39deg);
  transform: rotate(39deg);
}
.wi-wind.from-220-deg {
  -webkit-transform: rotate(40deg);
  -moz-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  -o-transform: rotate(40deg);
  transform: rotate(40deg);
}
.wi-wind.from-221-deg {
  -webkit-transform: rotate(41deg);
  -moz-transform: rotate(41deg);
  -ms-transform: rotate(41deg);
  -o-transform: rotate(41deg);
  transform: rotate(41deg);
}
.wi-wind.from-222-deg {
  -webkit-transform: rotate(42deg);
  -moz-transform: rotate(42deg);
  -ms-transform: rotate(42deg);
  -o-transform: rotate(42deg);
  transform: rotate(42deg);
}
.wi-wind.from-223-deg {
  -webkit-transform: rotate(43deg);
  -moz-transform: rotate(43deg);
  -ms-transform: rotate(43deg);
  -o-transform: rotate(43deg);
  transform: rotate(43deg);
}
.wi-wind.from-224-deg {
  -webkit-transform: rotate(44deg);
  -moz-transform: rotate(44deg);
  -ms-transform: rotate(44deg);
  -o-transform: rotate(44deg);
  transform: rotate(44deg);
}
.wi-wind.from-225-deg {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wi-wind.from-226-deg {
  -webkit-transform: rotate(46deg);
  -moz-transform: rotate(46deg);
  -ms-transform: rotate(46deg);
  -o-transform: rotate(46deg);
  transform: rotate(46deg);
}
.wi-wind.from-227-deg {
  -webkit-transform: rotate(47deg);
  -moz-transform: rotate(47deg);
  -ms-transform: rotate(47deg);
  -o-transform: rotate(47deg);
  transform: rotate(47deg);
}
.wi-wind.from-228-deg {
  -webkit-transform: rotate(48deg);
  -moz-transform: rotate(48deg);
  -ms-transform: rotate(48deg);
  -o-transform: rotate(48deg);
  transform: rotate(48deg);
}
.wi-wind.from-229-deg {
  -webkit-transform: rotate(49deg);
  -moz-transform: rotate(49deg);
  -ms-transform: rotate(49deg);
  -o-transform: rotate(49deg);
  transform: rotate(49deg);
}
.wi-wind.from-230-deg {
  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  -ms-transform: rotate(50deg);
  -o-transform: rotate(50deg);
  transform: rotate(50deg);
}
.wi-wind.from-231-deg {
  -webkit-transform: rotate(51deg);
  -moz-transform: rotate(51deg);
  -ms-transform: rotate(51deg);
  -o-transform: rotate(51deg);
  transform: rotate(51deg);
}
.wi-wind.from-232-deg {
  -webkit-transform: rotate(52deg);
  -moz-transform: rotate(52deg);
  -ms-transform: rotate(52deg);
  -o-transform: rotate(52deg);
  transform: rotate(52deg);
}
.wi-wind.from-233-deg {
  -webkit-transform: rotate(53deg);
  -moz-transform: rotate(53deg);
  -ms-transform: rotate(53deg);
  -o-transform: rotate(53deg);
  transform: rotate(53deg);
}
.wi-wind.from-234-deg {
  -webkit-transform: rotate(54deg);
  -moz-transform: rotate(54deg);
  -ms-transform: rotate(54deg);
  -o-transform: rotate(54deg);
  transform: rotate(54deg);
}
.wi-wind.from-235-deg {
  -webkit-transform: rotate(55deg);
  -moz-transform: rotate(55deg);
  -ms-transform: rotate(55deg);
  -o-transform: rotate(55deg);
  transform: rotate(55deg);
}
.wi-wind.from-236-deg {
  -webkit-transform: rotate(56deg);
  -moz-transform: rotate(56deg);
  -ms-transform: rotate(56deg);
  -o-transform: rotate(56deg);
  transform: rotate(56deg);
}
.wi-wind.from-237-deg {
  -webkit-transform: rotate(57deg);
  -moz-transform: rotate(57deg);
  -ms-transform: rotate(57deg);
  -o-transform: rotate(57deg);
  transform: rotate(57deg);
}
.wi-wind.from-238-deg {
  -webkit-transform: rotate(58deg);
  -moz-transform: rotate(58deg);
  -ms-transform: rotate(58deg);
  -o-transform: rotate(58deg);
  transform: rotate(58deg);
}
.wi-wind.from-239-deg {
  -webkit-transform: rotate(59deg);
  -moz-transform: rotate(59deg);
  -ms-transform: rotate(59deg);
  -o-transform: rotate(59deg);
  transform: rotate(59deg);
}
.wi-wind.from-240-deg {
  -webkit-transform: rotate(60deg);
  -moz-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  -o-transform: rotate(60deg);
  transform: rotate(60deg);
}
.wi-wind.from-241-deg {
  -webkit-transform: rotate(61deg);
  -moz-transform: rotate(61deg);
  -ms-transform: rotate(61deg);
  -o-transform: rotate(61deg);
  transform: rotate(61deg);
}
.wi-wind.from-242-deg {
  -webkit-transform: rotate(62deg);
  -moz-transform: rotate(62deg);
  -ms-transform: rotate(62deg);
  -o-transform: rotate(62deg);
  transform: rotate(62deg);
}
.wi-wind.from-243-deg {
  -webkit-transform: rotate(63deg);
  -moz-transform: rotate(63deg);
  -ms-transform: rotate(63deg);
  -o-transform: rotate(63deg);
  transform: rotate(63deg);
}
.wi-wind.from-244-deg {
  -webkit-transform: rotate(64deg);
  -moz-transform: rotate(64deg);
  -ms-transform: rotate(64deg);
  -o-transform: rotate(64deg);
  transform: rotate(64deg);
}
.wi-wind.from-245-deg {
  -webkit-transform: rotate(65deg);
  -moz-transform: rotate(65deg);
  -ms-transform: rotate(65deg);
  -o-transform: rotate(65deg);
  transform: rotate(65deg);
}
.wi-wind.from-246-deg {
  -webkit-transform: rotate(66deg);
  -moz-transform: rotate(66deg);
  -ms-transform: rotate(66deg);
  -o-transform: rotate(66deg);
  transform: rotate(66deg);
}
.wi-wind.from-247-deg {
  -webkit-transform: rotate(67deg);
  -moz-transform: rotate(67deg);
  -ms-transform: rotate(67deg);
  -o-transform: rotate(67deg);
  transform: rotate(67deg);
}
.wi-wind.from-248-deg {
  -webkit-transform: rotate(68deg);
  -moz-transform: rotate(68deg);
  -ms-transform: rotate(68deg);
  -o-transform: rotate(68deg);
  transform: rotate(68deg);
}
.wi-wind.from-249-deg {
  -webkit-transform: rotate(69deg);
  -moz-transform: rotate(69deg);
  -ms-transform: rotate(69deg);
  -o-transform: rotate(69deg);
  transform: rotate(69deg);
}
.wi-wind.from-250-deg {
  -webkit-transform: rotate(70deg);
  -moz-transform: rotate(70deg);
  -ms-transform: rotate(70deg);
  -o-transform: rotate(70deg);
  transform: rotate(70deg);
}
.wi-wind.from-251-deg {
  -webkit-transform: rotate(71deg);
  -moz-transform: rotate(71deg);
  -ms-transform: rotate(71deg);
  -o-transform: rotate(71deg);
  transform: rotate(71deg);
}
.wi-wind.from-252-deg {
  -webkit-transform: rotate(72deg);
  -moz-transform: rotate(72deg);
  -ms-transform: rotate(72deg);
  -o-transform: rotate(72deg);
  transform: rotate(72deg);
}
.wi-wind.from-253-deg {
  -webkit-transform: rotate(73deg);
  -moz-transform: rotate(73deg);
  -ms-transform: rotate(73deg);
  -o-transform: rotate(73deg);
  transform: rotate(73deg);
}
.wi-wind.from-254-deg {
  -webkit-transform: rotate(74deg);
  -moz-transform: rotate(74deg);
  -ms-transform: rotate(74deg);
  -o-transform: rotate(74deg);
  transform: rotate(74deg);
}
.wi-wind.from-255-deg {
  -webkit-transform: rotate(75deg);
  -moz-transform: rotate(75deg);
  -ms-transform: rotate(75deg);
  -o-transform: rotate(75deg);
  transform: rotate(75deg);
}
.wi-wind.from-256-deg {
  -webkit-transform: rotate(76deg);
  -moz-transform: rotate(76deg);
  -ms-transform: rotate(76deg);
  -o-transform: rotate(76deg);
  transform: rotate(76deg);
}
.wi-wind.from-257-deg {
  -webkit-transform: rotate(77deg);
  -moz-transform: rotate(77deg);
  -ms-transform: rotate(77deg);
  -o-transform: rotate(77deg);
  transform: rotate(77deg);
}
.wi-wind.from-258-deg {
  -webkit-transform: rotate(78deg);
  -moz-transform: rotate(78deg);
  -ms-transform: rotate(78deg);
  -o-transform: rotate(78deg);
  transform: rotate(78deg);
}
.wi-wind.from-259-deg {
  -webkit-transform: rotate(79deg);
  -moz-transform: rotate(79deg);
  -ms-transform: rotate(79deg);
  -o-transform: rotate(79deg);
  transform: rotate(79deg);
}
.wi-wind.from-260-deg {
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -ms-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}
.wi-wind.from-261-deg {
  -webkit-transform: rotate(81deg);
  -moz-transform: rotate(81deg);
  -ms-transform: rotate(81deg);
  -o-transform: rotate(81deg);
  transform: rotate(81deg);
}
.wi-wind.from-262-deg {
  -webkit-transform: rotate(82deg);
  -moz-transform: rotate(82deg);
  -ms-transform: rotate(82deg);
  -o-transform: rotate(82deg);
  transform: rotate(82deg);
}
.wi-wind.from-263-deg {
  -webkit-transform: rotate(83deg);
  -moz-transform: rotate(83deg);
  -ms-transform: rotate(83deg);
  -o-transform: rotate(83deg);
  transform: rotate(83deg);
}
.wi-wind.from-264-deg {
  -webkit-transform: rotate(84deg);
  -moz-transform: rotate(84deg);
  -ms-transform: rotate(84deg);
  -o-transform: rotate(84deg);
  transform: rotate(84deg);
}
.wi-wind.from-265-deg {
  -webkit-transform: rotate(85deg);
  -moz-transform: rotate(85deg);
  -ms-transform: rotate(85deg);
  -o-transform: rotate(85deg);
  transform: rotate(85deg);
}
.wi-wind.from-266-deg {
  -webkit-transform: rotate(86deg);
  -moz-transform: rotate(86deg);
  -ms-transform: rotate(86deg);
  -o-transform: rotate(86deg);
  transform: rotate(86deg);
}
.wi-wind.from-267-deg {
  -webkit-transform: rotate(87deg);
  -moz-transform: rotate(87deg);
  -ms-transform: rotate(87deg);
  -o-transform: rotate(87deg);
  transform: rotate(87deg);
}
.wi-wind.from-268-deg {
  -webkit-transform: rotate(88deg);
  -moz-transform: rotate(88deg);
  -ms-transform: rotate(88deg);
  -o-transform: rotate(88deg);
  transform: rotate(88deg);
}
.wi-wind.from-269-deg {
  -webkit-transform: rotate(89deg);
  -moz-transform: rotate(89deg);
  -ms-transform: rotate(89deg);
  -o-transform: rotate(89deg);
  transform: rotate(89deg);
}
.wi-wind.from-270-deg {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.wi-wind.from-271-deg {
  -webkit-transform: rotate(91deg);
  -moz-transform: rotate(91deg);
  -ms-transform: rotate(91deg);
  -o-transform: rotate(91deg);
  transform: rotate(91deg);
}
.wi-wind.from-272-deg {
  -webkit-transform: rotate(92deg);
  -moz-transform: rotate(92deg);
  -ms-transform: rotate(92deg);
  -o-transform: rotate(92deg);
  transform: rotate(92deg);
}
.wi-wind.from-273-deg {
  -webkit-transform: rotate(93deg);
  -moz-transform: rotate(93deg);
  -ms-transform: rotate(93deg);
  -o-transform: rotate(93deg);
  transform: rotate(93deg);
}
.wi-wind.from-274-deg {
  -webkit-transform: rotate(94deg);
  -moz-transform: rotate(94deg);
  -ms-transform: rotate(94deg);
  -o-transform: rotate(94deg);
  transform: rotate(94deg);
}
.wi-wind.from-275-deg {
  -webkit-transform: rotate(95deg);
  -moz-transform: rotate(95deg);
  -ms-transform: rotate(95deg);
  -o-transform: rotate(95deg);
  transform: rotate(95deg);
}
.wi-wind.from-276-deg {
  -webkit-transform: rotate(96deg);
  -moz-transform: rotate(96deg);
  -ms-transform: rotate(96deg);
  -o-transform: rotate(96deg);
  transform: rotate(96deg);
}
.wi-wind.from-277-deg {
  -webkit-transform: rotate(97deg);
  -moz-transform: rotate(97deg);
  -ms-transform: rotate(97deg);
  -o-transform: rotate(97deg);
  transform: rotate(97deg);
}
.wi-wind.from-278-deg {
  -webkit-transform: rotate(98deg);
  -moz-transform: rotate(98deg);
  -ms-transform: rotate(98deg);
  -o-transform: rotate(98deg);
  transform: rotate(98deg);
}
.wi-wind.from-279-deg {
  -webkit-transform: rotate(99deg);
  -moz-transform: rotate(99deg);
  -ms-transform: rotate(99deg);
  -o-transform: rotate(99deg);
  transform: rotate(99deg);
}
.wi-wind.from-280-deg {
  -webkit-transform: rotate(100deg);
  -moz-transform: rotate(100deg);
  -ms-transform: rotate(100deg);
  -o-transform: rotate(100deg);
  transform: rotate(100deg);
}
.wi-wind.from-281-deg {
  -webkit-transform: rotate(101deg);
  -moz-transform: rotate(101deg);
  -ms-transform: rotate(101deg);
  -o-transform: rotate(101deg);
  transform: rotate(101deg);
}
.wi-wind.from-282-deg {
  -webkit-transform: rotate(102deg);
  -moz-transform: rotate(102deg);
  -ms-transform: rotate(102deg);
  -o-transform: rotate(102deg);
  transform: rotate(102deg);
}
.wi-wind.from-283-deg {
  -webkit-transform: rotate(103deg);
  -moz-transform: rotate(103deg);
  -ms-transform: rotate(103deg);
  -o-transform: rotate(103deg);
  transform: rotate(103deg);
}
.wi-wind.from-284-deg {
  -webkit-transform: rotate(104deg);
  -moz-transform: rotate(104deg);
  -ms-transform: rotate(104deg);
  -o-transform: rotate(104deg);
  transform: rotate(104deg);
}
.wi-wind.from-285-deg {
  -webkit-transform: rotate(105deg);
  -moz-transform: rotate(105deg);
  -ms-transform: rotate(105deg);
  -o-transform: rotate(105deg);
  transform: rotate(105deg);
}
.wi-wind.from-286-deg {
  -webkit-transform: rotate(106deg);
  -moz-transform: rotate(106deg);
  -ms-transform: rotate(106deg);
  -o-transform: rotate(106deg);
  transform: rotate(106deg);
}
.wi-wind.from-287-deg {
  -webkit-transform: rotate(107deg);
  -moz-transform: rotate(107deg);
  -ms-transform: rotate(107deg);
  -o-transform: rotate(107deg);
  transform: rotate(107deg);
}
.wi-wind.from-288-deg {
  -webkit-transform: rotate(108deg);
  -moz-transform: rotate(108deg);
  -ms-transform: rotate(108deg);
  -o-transform: rotate(108deg);
  transform: rotate(108deg);
}
.wi-wind.from-289-deg {
  -webkit-transform: rotate(109deg);
  -moz-transform: rotate(109deg);
  -ms-transform: rotate(109deg);
  -o-transform: rotate(109deg);
  transform: rotate(109deg);
}
.wi-wind.from-290-deg {
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  -ms-transform: rotate(110deg);
  -o-transform: rotate(110deg);
  transform: rotate(110deg);
}
.wi-wind.from-291-deg {
  -webkit-transform: rotate(111deg);
  -moz-transform: rotate(111deg);
  -ms-transform: rotate(111deg);
  -o-transform: rotate(111deg);
  transform: rotate(111deg);
}
.wi-wind.from-292-deg {
  -webkit-transform: rotate(112deg);
  -moz-transform: rotate(112deg);
  -ms-transform: rotate(112deg);
  -o-transform: rotate(112deg);
  transform: rotate(112deg);
}
.wi-wind.from-293-deg {
  -webkit-transform: rotate(113deg);
  -moz-transform: rotate(113deg);
  -ms-transform: rotate(113deg);
  -o-transform: rotate(113deg);
  transform: rotate(113deg);
}
.wi-wind.from-294-deg {
  -webkit-transform: rotate(114deg);
  -moz-transform: rotate(114deg);
  -ms-transform: rotate(114deg);
  -o-transform: rotate(114deg);
  transform: rotate(114deg);
}
.wi-wind.from-295-deg {
  -webkit-transform: rotate(115deg);
  -moz-transform: rotate(115deg);
  -ms-transform: rotate(115deg);
  -o-transform: rotate(115deg);
  transform: rotate(115deg);
}
.wi-wind.from-296-deg {
  -webkit-transform: rotate(116deg);
  -moz-transform: rotate(116deg);
  -ms-transform: rotate(116deg);
  -o-transform: rotate(116deg);
  transform: rotate(116deg);
}
.wi-wind.from-297-deg {
  -webkit-transform: rotate(117deg);
  -moz-transform: rotate(117deg);
  -ms-transform: rotate(117deg);
  -o-transform: rotate(117deg);
  transform: rotate(117deg);
}
.wi-wind.from-298-deg {
  -webkit-transform: rotate(118deg);
  -moz-transform: rotate(118deg);
  -ms-transform: rotate(118deg);
  -o-transform: rotate(118deg);
  transform: rotate(118deg);
}
.wi-wind.from-299-deg {
  -webkit-transform: rotate(119deg);
  -moz-transform: rotate(119deg);
  -ms-transform: rotate(119deg);
  -o-transform: rotate(119deg);
  transform: rotate(119deg);
}
.wi-wind.from-300-deg {
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);
}
.wi-wind.from-301-deg {
  -webkit-transform: rotate(121deg);
  -moz-transform: rotate(121deg);
  -ms-transform: rotate(121deg);
  -o-transform: rotate(121deg);
  transform: rotate(121deg);
}
.wi-wind.from-302-deg {
  -webkit-transform: rotate(122deg);
  -moz-transform: rotate(122deg);
  -ms-transform: rotate(122deg);
  -o-transform: rotate(122deg);
  transform: rotate(122deg);
}
.wi-wind.from-303-deg {
  -webkit-transform: rotate(123deg);
  -moz-transform: rotate(123deg);
  -ms-transform: rotate(123deg);
  -o-transform: rotate(123deg);
  transform: rotate(123deg);
}
.wi-wind.from-304-deg {
  -webkit-transform: rotate(124deg);
  -moz-transform: rotate(124deg);
  -ms-transform: rotate(124deg);
  -o-transform: rotate(124deg);
  transform: rotate(124deg);
}
.wi-wind.from-305-deg {
  -webkit-transform: rotate(125deg);
  -moz-transform: rotate(125deg);
  -ms-transform: rotate(125deg);
  -o-transform: rotate(125deg);
  transform: rotate(125deg);
}
.wi-wind.from-306-deg {
  -webkit-transform: rotate(126deg);
  -moz-transform: rotate(126deg);
  -ms-transform: rotate(126deg);
  -o-transform: rotate(126deg);
  transform: rotate(126deg);
}
.wi-wind.from-307-deg {
  -webkit-transform: rotate(127deg);
  -moz-transform: rotate(127deg);
  -ms-transform: rotate(127deg);
  -o-transform: rotate(127deg);
  transform: rotate(127deg);
}
.wi-wind.from-308-deg {
  -webkit-transform: rotate(128deg);
  -moz-transform: rotate(128deg);
  -ms-transform: rotate(128deg);
  -o-transform: rotate(128deg);
  transform: rotate(128deg);
}
.wi-wind.from-309-deg {
  -webkit-transform: rotate(129deg);
  -moz-transform: rotate(129deg);
  -ms-transform: rotate(129deg);
  -o-transform: rotate(129deg);
  transform: rotate(129deg);
}
.wi-wind.from-310-deg {
  -webkit-transform: rotate(130deg);
  -moz-transform: rotate(130deg);
  -ms-transform: rotate(130deg);
  -o-transform: rotate(130deg);
  transform: rotate(130deg);
}
.wi-wind.from-311-deg {
  -webkit-transform: rotate(131deg);
  -moz-transform: rotate(131deg);
  -ms-transform: rotate(131deg);
  -o-transform: rotate(131deg);
  transform: rotate(131deg);
}
.wi-wind.from-312-deg {
  -webkit-transform: rotate(132deg);
  -moz-transform: rotate(132deg);
  -ms-transform: rotate(132deg);
  -o-transform: rotate(132deg);
  transform: rotate(132deg);
}
.wi-wind.from-313-deg {
  -webkit-transform: rotate(133deg);
  -moz-transform: rotate(133deg);
  -ms-transform: rotate(133deg);
  -o-transform: rotate(133deg);
  transform: rotate(133deg);
}
.wi-wind.from-314-deg {
  -webkit-transform: rotate(134deg);
  -moz-transform: rotate(134deg);
  -ms-transform: rotate(134deg);
  -o-transform: rotate(134deg);
  transform: rotate(134deg);
}
.wi-wind.from-315-deg {
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.wi-wind.from-316-deg {
  -webkit-transform: rotate(136deg);
  -moz-transform: rotate(136deg);
  -ms-transform: rotate(136deg);
  -o-transform: rotate(136deg);
  transform: rotate(136deg);
}
.wi-wind.from-317-deg {
  -webkit-transform: rotate(137deg);
  -moz-transform: rotate(137deg);
  -ms-transform: rotate(137deg);
  -o-transform: rotate(137deg);
  transform: rotate(137deg);
}
.wi-wind.from-318-deg {
  -webkit-transform: rotate(138deg);
  -moz-transform: rotate(138deg);
  -ms-transform: rotate(138deg);
  -o-transform: rotate(138deg);
  transform: rotate(138deg);
}
.wi-wind.from-319-deg {
  -webkit-transform: rotate(139deg);
  -moz-transform: rotate(139deg);
  -ms-transform: rotate(139deg);
  -o-transform: rotate(139deg);
  transform: rotate(139deg);
}
.wi-wind.from-320-deg {
  -webkit-transform: rotate(140deg);
  -moz-transform: rotate(140deg);
  -ms-transform: rotate(140deg);
  -o-transform: rotate(140deg);
  transform: rotate(140deg);
}
.wi-wind.from-321-deg {
  -webkit-transform: rotate(141deg);
  -moz-transform: rotate(141deg);
  -ms-transform: rotate(141deg);
  -o-transform: rotate(141deg);
  transform: rotate(141deg);
}
.wi-wind.from-322-deg {
  -webkit-transform: rotate(142deg);
  -moz-transform: rotate(142deg);
  -ms-transform: rotate(142deg);
  -o-transform: rotate(142deg);
  transform: rotate(142deg);
}
.wi-wind.from-323-deg {
  -webkit-transform: rotate(143deg);
  -moz-transform: rotate(143deg);
  -ms-transform: rotate(143deg);
  -o-transform: rotate(143deg);
  transform: rotate(143deg);
}
.wi-wind.from-324-deg {
  -webkit-transform: rotate(144deg);
  -moz-transform: rotate(144deg);
  -ms-transform: rotate(144deg);
  -o-transform: rotate(144deg);
  transform: rotate(144deg);
}
.wi-wind.from-325-deg {
  -webkit-transform: rotate(145deg);
  -moz-transform: rotate(145deg);
  -ms-transform: rotate(145deg);
  -o-transform: rotate(145deg);
  transform: rotate(145deg);
}
.wi-wind.from-326-deg {
  -webkit-transform: rotate(146deg);
  -moz-transform: rotate(146deg);
  -ms-transform: rotate(146deg);
  -o-transform: rotate(146deg);
  transform: rotate(146deg);
}
.wi-wind.from-327-deg {
  -webkit-transform: rotate(147deg);
  -moz-transform: rotate(147deg);
  -ms-transform: rotate(147deg);
  -o-transform: rotate(147deg);
  transform: rotate(147deg);
}
.wi-wind.from-328-deg {
  -webkit-transform: rotate(148deg);
  -moz-transform: rotate(148deg);
  -ms-transform: rotate(148deg);
  -o-transform: rotate(148deg);
  transform: rotate(148deg);
}
.wi-wind.from-329-deg {
  -webkit-transform: rotate(149deg);
  -moz-transform: rotate(149deg);
  -ms-transform: rotate(149deg);
  -o-transform: rotate(149deg);
  transform: rotate(149deg);
}
.wi-wind.from-330-deg {
  -webkit-transform: rotate(150deg);
  -moz-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  -o-transform: rotate(150deg);
  transform: rotate(150deg);
}
.wi-wind.from-331-deg {
  -webkit-transform: rotate(151deg);
  -moz-transform: rotate(151deg);
  -ms-transform: rotate(151deg);
  -o-transform: rotate(151deg);
  transform: rotate(151deg);
}
.wi-wind.from-332-deg {
  -webkit-transform: rotate(152deg);
  -moz-transform: rotate(152deg);
  -ms-transform: rotate(152deg);
  -o-transform: rotate(152deg);
  transform: rotate(152deg);
}
.wi-wind.from-333-deg {
  -webkit-transform: rotate(153deg);
  -moz-transform: rotate(153deg);
  -ms-transform: rotate(153deg);
  -o-transform: rotate(153deg);
  transform: rotate(153deg);
}
.wi-wind.from-334-deg {
  -webkit-transform: rotate(154deg);
  -moz-transform: rotate(154deg);
  -ms-transform: rotate(154deg);
  -o-transform: rotate(154deg);
  transform: rotate(154deg);
}
.wi-wind.from-335-deg {
  -webkit-transform: rotate(155deg);
  -moz-transform: rotate(155deg);
  -ms-transform: rotate(155deg);
  -o-transform: rotate(155deg);
  transform: rotate(155deg);
}
.wi-wind.from-336-deg {
  -webkit-transform: rotate(156deg);
  -moz-transform: rotate(156deg);
  -ms-transform: rotate(156deg);
  -o-transform: rotate(156deg);
  transform: rotate(156deg);
}
.wi-wind.from-337-deg {
  -webkit-transform: rotate(157deg);
  -moz-transform: rotate(157deg);
  -ms-transform: rotate(157deg);
  -o-transform: rotate(157deg);
  transform: rotate(157deg);
}
.wi-wind.from-338-deg {
  -webkit-transform: rotate(158deg);
  -moz-transform: rotate(158deg);
  -ms-transform: rotate(158deg);
  -o-transform: rotate(158deg);
  transform: rotate(158deg);
}
.wi-wind.from-339-deg {
  -webkit-transform: rotate(159deg);
  -moz-transform: rotate(159deg);
  -ms-transform: rotate(159deg);
  -o-transform: rotate(159deg);
  transform: rotate(159deg);
}
.wi-wind.from-340-deg {
  -webkit-transform: rotate(160deg);
  -moz-transform: rotate(160deg);
  -ms-transform: rotate(160deg);
  -o-transform: rotate(160deg);
  transform: rotate(160deg);
}
.wi-wind.from-341-deg {
  -webkit-transform: rotate(161deg);
  -moz-transform: rotate(161deg);
  -ms-transform: rotate(161deg);
  -o-transform: rotate(161deg);
  transform: rotate(161deg);
}
.wi-wind.from-342-deg {
  -webkit-transform: rotate(162deg);
  -moz-transform: rotate(162deg);
  -ms-transform: rotate(162deg);
  -o-transform: rotate(162deg);
  transform: rotate(162deg);
}
.wi-wind.from-343-deg {
  -webkit-transform: rotate(163deg);
  -moz-transform: rotate(163deg);
  -ms-transform: rotate(163deg);
  -o-transform: rotate(163deg);
  transform: rotate(163deg);
}
.wi-wind.from-344-deg {
  -webkit-transform: rotate(164deg);
  -moz-transform: rotate(164deg);
  -ms-transform: rotate(164deg);
  -o-transform: rotate(164deg);
  transform: rotate(164deg);
}
.wi-wind.from-345-deg {
  -webkit-transform: rotate(165deg);
  -moz-transform: rotate(165deg);
  -ms-transform: rotate(165deg);
  -o-transform: rotate(165deg);
  transform: rotate(165deg);
}
.wi-wind.from-346-deg {
  -webkit-transform: rotate(166deg);
  -moz-transform: rotate(166deg);
  -ms-transform: rotate(166deg);
  -o-transform: rotate(166deg);
  transform: rotate(166deg);
}
.wi-wind.from-347-deg {
  -webkit-transform: rotate(167deg);
  -moz-transform: rotate(167deg);
  -ms-transform: rotate(167deg);
  -o-transform: rotate(167deg);
  transform: rotate(167deg);
}
.wi-wind.from-348-deg {
  -webkit-transform: rotate(168deg);
  -moz-transform: rotate(168deg);
  -ms-transform: rotate(168deg);
  -o-transform: rotate(168deg);
  transform: rotate(168deg);
}
.wi-wind.from-349-deg {
  -webkit-transform: rotate(169deg);
  -moz-transform: rotate(169deg);
  -ms-transform: rotate(169deg);
  -o-transform: rotate(169deg);
  transform: rotate(169deg);
}
.wi-wind.from-350-deg {
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -ms-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  transform: rotate(170deg);
}
.wi-wind.from-351-deg {
  -webkit-transform: rotate(171deg);
  -moz-transform: rotate(171deg);
  -ms-transform: rotate(171deg);
  -o-transform: rotate(171deg);
  transform: rotate(171deg);
}
.wi-wind.from-352-deg {
  -webkit-transform: rotate(172deg);
  -moz-transform: rotate(172deg);
  -ms-transform: rotate(172deg);
  -o-transform: rotate(172deg);
  transform: rotate(172deg);
}
.wi-wind.from-353-deg {
  -webkit-transform: rotate(173deg);
  -moz-transform: rotate(173deg);
  -ms-transform: rotate(173deg);
  -o-transform: rotate(173deg);
  transform: rotate(173deg);
}
.wi-wind.from-354-deg {
  -webkit-transform: rotate(174deg);
  -moz-transform: rotate(174deg);
  -ms-transform: rotate(174deg);
  -o-transform: rotate(174deg);
  transform: rotate(174deg);
}
.wi-wind.from-355-deg {
  -webkit-transform: rotate(175deg);
  -moz-transform: rotate(175deg);
  -ms-transform: rotate(175deg);
  -o-transform: rotate(175deg);
  transform: rotate(175deg);
}
.wi-wind.from-356-deg {
  -webkit-transform: rotate(176deg);
  -moz-transform: rotate(176deg);
  -ms-transform: rotate(176deg);
  -o-transform: rotate(176deg);
  transform: rotate(176deg);
}
.wi-wind.from-357-deg {
  -webkit-transform: rotate(177deg);
  -moz-transform: rotate(177deg);
  -ms-transform: rotate(177deg);
  -o-transform: rotate(177deg);
  transform: rotate(177deg);
}
.wi-wind.from-358-deg {
  -webkit-transform: rotate(178deg);
  -moz-transform: rotate(178deg);
  -ms-transform: rotate(178deg);
  -o-transform: rotate(178deg);
  transform: rotate(178deg);
}
.wi-wind.from-359-deg {
  -webkit-transform: rotate(179deg);
  -moz-transform: rotate(179deg);
  -ms-transform: rotate(179deg);
  -o-transform: rotate(179deg);
  transform: rotate(179deg);
}
.wi-wind.from-360-deg {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-towards-n {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
.wi-towards-nne {
  -webkit-transform: rotate(23deg);
  -moz-transform: rotate(23deg);
  -ms-transform: rotate(23deg);
  -o-transform: rotate(23deg);
  transform: rotate(23deg);
}
.wi-towards-ne {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wi-towards-ene {
  -webkit-transform: rotate(68deg);
  -moz-transform: rotate(68deg);
  -ms-transform: rotate(68deg);
  -o-transform: rotate(68deg);
  transform: rotate(68deg);
}
.wi-towards-e {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.wi-towards-ese {
  -webkit-transform: rotate(113deg);
  -moz-transform: rotate(113deg);
  -ms-transform: rotate(113deg);
  -o-transform: rotate(113deg);
  transform: rotate(113deg);
}
.wi-towards-se {
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.wi-towards-sse {
  -webkit-transform: rotate(158deg);
  -moz-transform: rotate(158deg);
  -ms-transform: rotate(158deg);
  -o-transform: rotate(158deg);
  transform: rotate(158deg);
}
.wi-towards-s {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-towards-ssw {
  -webkit-transform: rotate(203deg);
  -moz-transform: rotate(203deg);
  -ms-transform: rotate(203deg);
  -o-transform: rotate(203deg);
  transform: rotate(203deg);
}
.wi-towards-sw {
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  transform: rotate(225deg);
}
.wi-towards-wsw {
  -webkit-transform: rotate(248deg);
  -moz-transform: rotate(248deg);
  -ms-transform: rotate(248deg);
  -o-transform: rotate(248deg);
  transform: rotate(248deg);
}
.wi-towards-w {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}
.wi-towards-wnw {
  -webkit-transform: rotate(293deg);
  -moz-transform: rotate(293deg);
  -ms-transform: rotate(293deg);
  -o-transform: rotate(293deg);
  transform: rotate(293deg);
}
.wi-towards-nw {
  -webkit-transform: rotate(313deg);
  -moz-transform: rotate(313deg);
  -ms-transform: rotate(313deg);
  -o-transform: rotate(313deg);
  transform: rotate(313deg);
}
.wi-towards-nnw {
  -webkit-transform: rotate(336deg);
  -moz-transform: rotate(336deg);
  -ms-transform: rotate(336deg);
  -o-transform: rotate(336deg);
  transform: rotate(336deg);
}
.wi-from-n {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-from-nne {
  -webkit-transform: rotate(203deg);
  -moz-transform: rotate(203deg);
  -ms-transform: rotate(203deg);
  -o-transform: rotate(203deg);
  transform: rotate(203deg);
}
.wi-from-ne {
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  transform: rotate(225deg);
}
.wi-from-ene {
  -webkit-transform: rotate(248deg);
  -moz-transform: rotate(248deg);
  -ms-transform: rotate(248deg);
  -o-transform: rotate(248deg);
  transform: rotate(248deg);
}
.wi-from-e {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
}
.wi-from-ese {
  -webkit-transform: rotate(293deg);
  -moz-transform: rotate(293deg);
  -ms-transform: rotate(293deg);
  -o-transform: rotate(293deg);
  transform: rotate(293deg);
}
.wi-from-se {
  -webkit-transform: rotate(315deg);
  -moz-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  -o-transform: rotate(315deg);
  transform: rotate(315deg);
}
.wi-from-sse {
  -webkit-transform: rotate(338deg);
  -moz-transform: rotate(338deg);
  -ms-transform: rotate(338deg);
  -o-transform: rotate(338deg);
  transform: rotate(338deg);
}
.wi-from-s {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
.wi-from-ssw {
  -webkit-transform: rotate(23deg);
  -moz-transform: rotate(23deg);
  -ms-transform: rotate(23deg);
  -o-transform: rotate(23deg);
  transform: rotate(23deg);
}
.wi-from-sw {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wi-from-wsw {
  -webkit-transform: rotate(68deg);
  -moz-transform: rotate(68deg);
  -ms-transform: rotate(68deg);
  -o-transform: rotate(68deg);
  transform: rotate(68deg);
}
.wi-from-w {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.wi-from-wnw {
  -webkit-transform: rotate(113deg);
  -moz-transform: rotate(113deg);
  -ms-transform: rotate(113deg);
  -o-transform: rotate(113deg);
  transform: rotate(113deg);
}
.wi-from-nw {
  -webkit-transform: rotate(133deg);
  -moz-transform: rotate(133deg);
  -ms-transform: rotate(133deg);
  -o-transform: rotate(133deg);
  transform: rotate(133deg);
}
.wi-from-nnw {
  -webkit-transform: rotate(156deg);
  -moz-transform: rotate(156deg);
  -ms-transform: rotate(156deg);
  -o-transform: rotate(156deg);
  transform: rotate(156deg);
}

`;
