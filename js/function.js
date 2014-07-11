// JavaScript Document

// Define a click binding for all anchors in the page


// Respond to back/forward navigation

$(function() {
  // Handler for .ready() called.
  $("[data-role='footer']").html('© Copyright 2013 AUF - CUF / Tel : 02585522200');
  $("#test").html('Dieu nous aime');
  $("#rechercher_formation").click(function() {  
	 envoie_formulaire();
	});
	
  });
function envoie_formulaire(){
	discipline = $("#discipline").val();
	pays = $("#pays").val();
	etablissement = $("#etablissement").val();
	niveau = $("#niveau").val();
	url1 = '';
	if(pays!= 0){
       url1 += "etablissement__pays__code_iso3="+pays;
    }
	url = "https://cartographie.auf.org/etablissement/api/?etablissement__region__nom=Asie-Pacifique&"+ url1;
    url += "&format=jsonp";
	
	var test = 'Romaric est le fils du Dieu tout puissant';
	//alert(url);
	ajax = $.ajax({
		type: 'GET',
		dataType: "jsonp",
		url: url,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			$('#loadgif').hide();
				
				//charger_pagination(url1,responseData.count,responseData.next,responseData.previous)
				tableau = '';
				//alert(responseData.results[1].nom);
				/*for(i=0;i<responseData.results.length;i++ ){
					idformation = "details-"+responseData.results[i].id;
					tableau+='<tr><td><a href="/formation-francophone/'+idformation+'">'+responseData.results[i].nom+'</a></td><td>'+responseData.results[i].pays+'</td>'+'<td>'+responseData.results[i].etablissement.nom+'</td><td>'+responseData.results[i].discipline_1.nom +'</td><td>'+responseData.results[i].niveau_diplome.nom+'</td></tr>';
				}
				$('#tableauformation > tbody:last').html(tableau);
				*/
				resultat='';
				for(i=0;i<responseData.results.length;i++ ){
					
					
					resultat += '<tr><th><strong><a onclick="ajax.details_formation()" href="details_formation.html?formation='+responseData.results[i].nom+'">'+responseData.results[i].nom+'</a></strong></th>'+
				
				'<td><div id="test"> </div>'+responseData.results[i].pays+'</td>'+
				'<td>'+responseData.results[i].niveau_diplome.nom+'</td></tr>';
				
				
				}
				prec ='<div id="pagination" align="center"> <div class="ui-nodisc-icon"><a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-carat-l ui-btn-icon-notext ui-btn-b ui-btn-inline">Prec</a>';
				suiv ='<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-carat-r ui-btn-icon-notext ui-btn-b ui-btn-inline">Suiv</a></div>';
				$('#resultats > tbody:last').html(resultat);
				 
 				
				$('#pagination').html(prec+suiv);
				$('#titre').html('titre');
				
				
				
		},
		error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.'+errorThrown);
		},
		details_formation: function(){
			alert('pourquoi?');
		}
});
	
	
}
