$('div.ui-page').live("swipeleft", function(){
		active = $.mobile.activePage.attr('id');
		selector = '[href="'+active+'"]';
		
		nextlien = $(selector).parent('li');
		allNextLi = nextlien.nextAll('li:first');// selection de tous les balise LI suivante
		nextpage = allNextLi.find('a').attr('href');
		 
		if (nextpage !=  undefined) {
			$.mobile.changePage(nextpage, "slide", true, true);
			charger_news(nextpage);
		}
	});
	$('div.ui-page').live("swiperight", function(){
		active = $.mobile.activePage.attr('id')+'.html';
		selector = '[href="'+active+'"]';
		prevlien = $(selector).parent('li');
		allPrevLi = prevlien.prevAll('li:first');// selection de tous les balise LI suivante
		prevpage = allPrevLi.find('a').attr('href');
		if (prevpage !=  undefined) {
			$.mobile.changePage(prevpage, {transition: "slide",reverse: true}, true, true);
			//$.mobile.changePage(nextpage, "slide", false, true);
			charger_news(prevpage);
		}
	});
    
    function charger_details(){
			$.ajax({
				type: 'GET',
				dataType: "jsonp",
				url: url,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {			
						
						details='';
						data = responseData.results;
						for(i=0;i<responseData.results.length;i++ ){
					 
							details+='<div data-role="page" class="ui-page" data-add-back-btn="true" id="page'+i+'" >';	
							details+='<div id="apps-header'+i+'" data-theme="b" data-role="header" data-position="fixed">  <h1>Détails des infos </h1>';
							details+='<a id="btn-back'+i+'" data-role="button" data-rel="back" data-transition="slide" data-icon="arrow-l" data-iconpos="left" class="ui-btn-left" > Retour </a>  </div>';
							details+='<div role="main" class="ui-content"> <h2> '+data[i].titre+'</h2><img src="'+racine+data[i].images+'">'+data[i].extrait_contenu+'</div>	</div>';
  
						
						
						}
						lesdetails = $(details);
						
						 lesdetails.appendTo($.mobile.pageContainer);
		
						$.mobile.initializePage();
		
					//$.mobile.navigate('#page0', "slide", true, true);
					//$('body').find('#page0').page();
						
				},
				error: function (responseData, textStatus, errorThrown) {
						
					alert('POST failed.'+errorThrown);
				}
				});
	
	}