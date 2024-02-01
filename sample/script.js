let editor;

ClassicEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
	} )
	.then( Neweditor => {
		editor = Neweditor;
       document.getElementById("toolbar").appendChild(editor.ui.view.toolbar.element);

	} )
	.catch( handleSampleError );



function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "ts7zs7z4guq4-x7p5lpdi0dj2" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
