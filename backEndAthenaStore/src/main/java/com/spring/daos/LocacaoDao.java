package com.spring.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.spring.db.Conexao;
import com.spring.models.*;

public class LocacaoDao {
	
	public static void AdicionarLocacao(Locacao locacao)throws Exception {
		Connection conexao = Conexao.getconnection();
		
		String sql = "INSERT INTO locacao (cliente,fita,colaborador) values (?,?,?)";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1,locacao.getCliente());
		stmt.setInt(2,locacao.getFita());
		stmt.setInt(3,locacao.getColaborador());
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void RemoverLocacao(Locacao locacao) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "DELETE FROM locacao WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1,locacao.getId());

		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void AtualizarLocacao(Locacao locacao) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "UPDATE locacao SET cliente = ?, fita = ? , colaborador = ?  WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1,locacao.getCliente());
		stmt.setInt(2,locacao.getFita());
		stmt.setInt(3,locacao.getColaborador());
		stmt.setInt(4,locacao.getId());

		
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static List<Locacao> TodasLocacoes() throws Exception {
		List<Locacao> locacoes = new ArrayList<Locacao>();
		
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM locacao";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			Locacao locacao = new Locacao();
			locacao.setColaborador(rs.getInt("colaborador"));
			locacao.setFita(rs.getInt("fita"));
			locacao.setCliente(rs.getInt("cliente"));
			locacao.setId(rs.getInt("id"));
			
			locacoes.add(locacao);
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return locacoes;
	}
	
	public static Locacao GetLocacao(int id) throws Exception {
		
		Locacao locacao = new Locacao();
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM locacao WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setInt(1,id);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			
			locacao.setColaborador(rs.getInt("colaborador"));
			locacao.setFita(rs.getInt("fita"));
			locacao.setCliente(rs.getInt("cliente"));
			locacao.setId(rs.getInt("id"));
			
			
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return locacao;
	}
}
