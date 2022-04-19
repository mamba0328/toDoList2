(()=>{"use strict";function e(){const e=document.getElementById("modalWindow"),t=document.getElementById("overlay");e.classList.remove("active"),t.classList.remove("active"),document.getElementById("notes").value="",document.getElementById("modalTaskName").value=""}const t=document.getElementById("addATask");t.addEventListener("mouseover",(e=>{e.target.style.backgroundColor="rgb(36, 163, 26)"})),t.addEventListener("mouseleave",(e=>{e.target.style.backgroundColor="rgb(26, 153, 26)"})),t.addEventListener("click",(()=>{!function(){const e=document.getElementById("modalWindow"),t=document.getElementById("overlay");e.classList.add("active"),t.classList.add("active")}()})),document.getElementById("overlay").addEventListener("click",(()=>{e()}));const o=document.getElementById("modalTaskName");o.addEventListener("mouseenter",(e=>{e.target.style.outline="solid",e.target.style.outlineWidth="1px",e.target.style.outlineColor="grey"})),o.addEventListener("mouseleave",(e=>{e.target.style.outline="none"})),Array.from(document.getElementsByClassName("deadline")).forEach((e=>{e.addEventListener("mouseover",(e=>{e.target.style.borderBottom="1px solid black"})),e.addEventListener("mouseout",(e=>{e.target.style.borderBottom="none"}))}));const n=document.getElementById("saveTask");n.addEventListener("click",(()=>{e()})),n.addEventListener("mouseover",(e=>{e.target.style.backgroundColor="rgb(26, 153, 26)"})),n.addEventListener("mouseleave",(e=>{e.target.style.backgroundColor="transparent"})),Array.from(document.getElementsByClassName("todoDeadline")).forEach((e=>{e.addEventListener("mouseover",(e=>{e.target.previousElementSibling?e.target.classList.add("mouseon"):(e.target.style.borderBottom="1.5px solid grey",e.target.style.color="black")})),e.addEventListener("mouseleave",(e=>{e.target.previousElementSibling?e.target.classList.remove("mouseon"):(e.target.style.borderBottom="none",e.target.style.color="rgb(100, 100, 100)")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBT0EsU0FBU0EsSUFDTCxNQUFNQyxFQUFRQyxTQUFTQyxlQUFlLGVBQ2hDQyxFQUFVRixTQUFTQyxlQUFlLFdBQ3hDRixFQUFNSSxVQUFVQyxPQUFPLFVBQ3ZCRixFQUFRQyxVQUFVQyxPQUFPLFVBQ1JKLFNBQVNDLGVBQWUsU0FDaENJLE1BQVEsR0FDSEwsU0FBU0MsZUFBZSxpQkFDaENJLE1BQVEsR0NWbEIsTUFBTUMsRUFBaUJOLFNBQVNDLGVBQWUsWUFFL0NLLEVBQWVDLGlCQUFpQixhQUFjQyxJQUMxQ0EsRUFBRUMsT0FBT0MsTUFBTUMsZ0JBQWtCLHNCQUVyQ0wsRUFBZUMsaUJBQWlCLGNBQWVDLElBQzNDQSxFQUFFQyxPQUFPQyxNQUFNQyxnQkFBa0Isc0JBRXJDTCxFQUFlQyxpQkFBaUIsU0FBUyxNRGJ6QyxXQUNJLE1BQU1SLEVBQVFDLFNBQVNDLGVBQWUsZUFDaENDLEVBQVVGLFNBQVNDLGVBQWUsV0FDeENGLEVBQU1JLFVBQVVTLElBQUksVUFDcEJWLEVBQVFDLFVBQVVTLElBQUksVUNVdEJDLE1BSVliLFNBQVNDLGVBQWUsV0FFaENNLGlCQUFpQixTQUFTLEtBQzlCVCxPQUlKLE1BQU1nQixFQUFnQmQsU0FBU0MsZUFBZSxpQkFFOUNhLEVBQWNQLGlCQUFpQixjQUFlQyxJQUMxQ0EsRUFBRUMsT0FBT0MsTUFBTUssUUFBVSxRQUN6QlAsRUFBRUMsT0FBT0MsTUFBTU0sYUFBZSxNQUM5QlIsRUFBRUMsT0FBT0MsTUFBTU8sYUFBZSxVQUdsQ0gsRUFBY1AsaUJBQWlCLGNBQWVDLElBQzFDQSxFQUFFQyxPQUFPQyxNQUFNSyxRQUFVLFVBSVhHLE1BQU1DLEtBQUtuQixTQUFTb0IsdUJBQXVCLGFBRW5EQyxTQUFRQyxJQUNqQkEsRUFBU2YsaUJBQWlCLGFBQWNDLElBQ3BDQSxFQUFFQyxPQUFPQyxNQUFNYSxhQUFlLHFCQUVsQ0QsRUFBU2YsaUJBQWlCLFlBQWFDLElBQ3BDQSxFQUFFQyxPQUFPQyxNQUFNYSxhQUFlLGFBS2xDLE1BQU1DLEVBQVd4QixTQUFTQyxlQUFlLFlBRXpDdUIsRUFBU2pCLGlCQUFpQixTQUFTLEtBQy9CVCxPQUdKMEIsRUFBU2pCLGlCQUFpQixhQUFjQyxJQUNwQ0EsRUFBRUMsT0FBT0MsTUFBTUMsZ0JBQWtCLHNCQUdyQ2EsRUFBU2pCLGlCQUFpQixjQUFlQyxJQUNyQ0EsRUFBRUMsT0FBT0MsTUFBTUMsZ0JBQWtCLGlCQUlmTyxNQUFNQyxLQUFLbkIsU0FBU29CLHVCQUF1QixpQkFDbkRDLFNBQVFJLElBQ2xCQSxFQUFhbEIsaUJBQWlCLGFBQWNDLElBQ3BDQSxFQUFFQyxPQUFPaUIsdUJBSWJsQixFQUFFQyxPQUFPTixVQUFVUyxJQUFJLFlBSG5CSixFQUFFQyxPQUFPQyxNQUFNYSxhQUFlLG1CQUM5QmYsRUFBRUMsT0FBT0MsTUFBTWlCLE1BQVEsWUFNL0JGLEVBQWFsQixpQkFBaUIsY0FBZUMsSUFDckNBLEVBQUVDLE9BQU9pQix1QkFJYmxCLEVBQUVDLE9BQU9OLFVBQVVDLE9BQU8sWUFIdEJJLEVBQUVDLE9BQU9DLE1BQU1hLGFBQWUsT0FDOUJmLEVBQUVDLE9BQU9DLE1BQU1pQixNQUFRLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vc3JjL21vZGFsQXBwZWFyZW5jZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3Blbk1vZGFsKCkgeyBcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsV2luZG93Jyk7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkgeyBcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsV2luZG93Jyk7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcclxuICAgIHRleHRBcmVhLnZhbHVlID0gJyc7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFRhc2tOYW1lJyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQge29wZW5Nb2RhbCwgXHJcbmNsb3NlTW9kYWx9ICIsImltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsQXBwZWFyZW5jZVwiOyBcclxuXHJcblxyXG5cclxuLy9hZGQgYSB0YXNrIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IFxyXG5jb25zdCBhZGRBVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRBVGFzaycpOyBcclxuXHJcbmFkZEFUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDM2LCAxNjMsIDI2KSc7XHJcbn0pXHJcbmFkZEFUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNiwgMTUzLCAyNiknXHJcbn0pXHJcbmFkZEFUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKCk7XHJcbn0pXHJcblxyXG4vL21vZHVsZSBvdmVybGF5IGZ1bmN0aW9uYWxpdHlcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG59KVxyXG5cclxuLy9tb2RhbCBpbnB1dHMgZnVuY3Rpb25hbGl0eSBcclxuY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFRhc2tOYW1lJyk7IFxyXG4gXHJcbnRhc2tOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7IFxyXG4gICAgZS50YXJnZXQuc3R5bGUub3V0bGluZSA9ICdzb2xpZCc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5vdXRsaW5lV2lkdGggPSAnMXB4JztcclxuICAgIGUudGFyZ2V0LnN0eWxlLm91dGxpbmVDb2xvciA9ICdncmV5JztcclxufSlcclxuXHJcbnRhc2tOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7IFxyXG4gICAgZS50YXJnZXQuc3R5bGUub3V0bGluZSA9ICdub25lJ1xyXG59KVxyXG5cclxuLy9tb2RhbCB3aW5kb3cgZGVhZGxpbmVzIGZ1bmN0aW9uYWxpdHlcclxuY29uc3QgZGVhZGxpbmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWFkbGluZScpKTtcclxuXHJcbmRlYWRsaW5lcy5mb3JFYWNoKGRlYWRsaW5lID0+IHsgXHJcbiBkZWFkbGluZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSk9PiB7IFxyXG4gICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgYmxhY2snXHJcbiB9KVxyXG4gZGVhZGxpbmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSk9PiB7IFxyXG4gICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyQm90dG9tID0gJ25vbmUnXHJcbn0pXHJcbn0pXHJcblxyXG4vL3NhdmUgdGFzayBtb2R1bGUgZnVuY3Rpb25hbGl0eSBcclxuY29uc3Qgc2F2ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZVRhc2snKTtcclxuXHJcbnNhdmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG59KVxyXG5cclxuc2F2ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjYsIDE1MywgMjYpJztcclxufSlcclxuXHJcbnNhdmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxufSlcclxuXHJcbi8vZGVhZGxpbmVXcmFwcGVycyBmdW5jdGlvbmFsaXR5IFxyXG5jb25zdCB0b2RvRGVhZGxpbmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvRGVhZGxpbmUnKSk7XHJcbnRvZG9EZWFkbGluZXMuZm9yRWFjaCh0b2RvRGVhZGxpbmUgPT4geyBcclxuICAgIHRvZG9EZWFkbGluZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4geyBcclxuICAgICAgICBpZighZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZyl7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxLjVweCBzb2xpZCBncmV5JztcclxuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21vdXNlb24nKTtcclxuICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRvZG9EZWFkbGluZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHsgXHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpe1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3JnYigxMDAsIDEwMCwgMTAwKSc7XHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbW91c2VvbicpO1xyXG4gICAgIH1cclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbImNsb3NlTW9kYWwiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidmFsdWUiLCJhZGRBVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhZGQiLCJvcGVuTW9kYWwiLCJ0YXNrTmFtZUlucHV0Iiwib3V0bGluZSIsIm91dGxpbmVXaWR0aCIsIm91dGxpbmVDb2xvciIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZGVhZGxpbmUiLCJib3JkZXJCb3R0b20iLCJzYXZlVGFzayIsInRvZG9EZWFkbGluZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=